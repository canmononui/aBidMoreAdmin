import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';

@Component({
  selector: 'app-report-product-history-detail',
  templateUrl: './report-product-history-detail.component.html',
  styleUrls: ['./report-product-history-detail.component.css']
})
export class ReportProductHistoryDetailComponent implements OnInit {

  public id;
  public report: any = null;
  public buyerReport: any = [];
  public productDes: any;
  public shopDes: any;
  public showContent = false;
  public imgUrl = '';
  public banUserSellerCheck = false;

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('reportProduct');
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    if (this.id) {
      // GET REPORT DES
      this.firestore.collection('product').doc(this.id).get().toPromise()
        .then((product) => {
          if (product.data() != undefined) {
            this.productDes = product.data();
            if (this.productDes.productStatus == 'banByAdmin') {
              this.getShop();
            }
          }
          else {
            this.router.navigate(['/report-product-history-list']);
          }
        })
    }
    else {
      this.router.navigate(['/report-product-history-list']);
    }
  }

  getShop(){
    // GET SHOP DES
    this.firestore.collection('shop').doc(this.productDes.sellerUID).get().toPromise()
    .then((shop) => {
      if (shop.data() != undefined) {
        this.shopDes = shop.data();
      }
      else{
        this.router.navigate(['/report-product-history-list']);
      }
      this.getReport()
    })
  }

  getReport() {
    // GET REPORT DES
    this.firestore.collection('report-product').doc(this.id).get().toPromise()
      .then((report) => {
        if (report.data() != undefined) {
          this.report = report.data();
          // GET USER BUYER REPORT
          this.firestore.collection('report-product').doc(this.id).collection('report-list').get().toPromise()
            .then((userReport) => {
              userReport.forEach((doc) => {
                var data: any = doc.data()
                if (data.profileImg.imgUrl == null) {
                  data.profileImg.imgUrl = './assets/img/profile-icon-BG.svg';
                }
                this.buyerReport.push({
                  key: doc.id,
                  value: data
                })
              });
            })
        }
        else {
          this.report = null;
          this.buyerReport = [];
        }
        this.showContent = true;
      })
  }

  unBan(){
    // UPDATE PRODUCT STATUS IN PRODUCT COL
    this.firestore.collection('product').doc(this.id).update({
      productStatus: 'onSale14Days',
    }).then((doc) => {
      // UPDATE PRODUCT STATUS IN SHOP COL
      this.firestore.collection('shop').doc(this.productDes.sellerUID).collection('product').doc(this.productDes.productKey).update({
        productStatus: 'onSale14Days',
      })
      .then((doc) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.productDes.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'สินค้าถูกยกเลิกระงับ',
          description: 'สินค้าถูกยกเลิกระงับและจะถูกแสดงบนหน้าร้านจำนวน 14 วัน ร้านค้าสามารถแก้ไขเปลี่ยนสถานะสินค้าได้ในเมนูรายการสินค้า',
          product: {
            productKey: this.id,
            productName: this.productDes.name,
            imgProduct1: {
              imgUrl: this.productDes.imgProduct[0].imgUrl,
              imgpath: this.productDes.imgProduct[0].imgpath
            },
          },
          type: 'productNoti',
          readed: false
        })
        .then(() => {
          this.router.navigate(['/report-product-history-list']);
        })
      })
    })
  }


  copySellerUID(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.productDes.sellerUID;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  copyproductKey(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
