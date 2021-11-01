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
  selector: 'app-report-product-detail',
  templateUrl: './report-product-detail.component.html',
  styleUrls: ['./report-product-detail.component.css']
})
export class ReportProductDetailComponent implements OnInit {

  public id;
  public report: any;
  public buyerReport: any = [];
  public productDes: any;
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
      this.firestore.collection('report-product').doc(this.id).get().toPromise()
      .then((report) => {
        // console.log(report.data())
        this.report = report.data();
      })
      .then((doc) => {
        // GET USER BUYER REPORT
        this.firestore.collection('report-product').doc(this.id).collection('report-list').get().toPromise()
        .then((userReport) => {
          userReport.forEach((doc) => {
            var data:any = doc.data()
            if(data.profileImg.imgUrl == null){
              data.profileImg.imgUrl = './assets/img/profile-icon-BG.svg';
            }
            this.buyerReport.push({
              key: doc.id,
              value: data
            })
          });
          // GET PRODUCT DES
          this.gotoGetProductDes()
        })
      })
    }
    else{
      this.router.navigate(['/report-product-list']);
    }
  }

  gotoGetProductDes(){
    this.firestore.collection('product').doc(this.id).get().toPromise()
    .then((product) => {
      this.productDes = product.data();
      this.showContent = true;
    })
  }
  
  banProductInput(dataInput) {
    if (dataInput.target.value == '') {
      this.banUserSellerCheck = false;
    }
    else {
      this.banUserSellerCheck = true;
    }
  }

  notBanProduct(){
    for(var i=0; i<this.buyerReport.length; i++){
      this.firestore.collection('report-product').doc(this.id).collection('report-list').doc(this.buyerReport[i].key).delete()
    }
    // DELETE REPORT DOC
    this.firestore.collection('report-product').doc(this.id).delete()
    .then((doc) => {
      this.router.navigate(['/report-product-list']);
    })
  }

  banProduct(reasonInput_){

    // UPDATE PRODUCT STATUS IN PRODUCT COL
    this.firestore.collection('product').doc(this.id).update({
      productStatus: 'banByAdmin',
      productBan: {
        banAt: firebase.firestore.Timestamp.now(),
        reason: reasonInput_,
        banByAdminUID: this.auth.currentUserId
      }
    }).then((doc) => {
      // UPDATE PRODUCT STATUS IN SHOP COL
      this.firestore.collection('shop').doc(this.productDes.sellerUID).collection('product').doc(this.productDes.productKey).update({
      productStatus: 'banByAdmin',
      productBan: {
        banAt: firebase.firestore.Timestamp.now(),
        reason: reasonInput_,
        banByAdminUID: this.auth.currentUserId
      }
    })
    .then((doc) => {
      // UPDATE REPORT DOC
      this.firestore.collection('report-product').doc(this.id).update({
        readed: true
      })
      .then((doc) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.report.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'สินค้าถูกระงับ',
          description: 'เหตุผลการระงับสินค้า ' + reasonInput_,
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
          this.router.navigate(['/report-product-list']);
        })
      })
    })
    })
  }

  popUpImg(imgUrl){
    this.imgUrl = imgUrl;
  }

  copySellerUID(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.report.sellerUID;
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
    selBox.value = this.report.productKey;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
