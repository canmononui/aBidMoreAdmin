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
  selector: 'app-report-product-admin-detail',
  templateUrl: './report-product-admin-detail.component.html',
  styleUrls: ['./report-product-admin-detail.component.css']
})
export class ReportProductAdminDetailComponent implements OnInit {

  public id;
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
    console.log(this.id)
    if (this.id) {
      // GET PRODUCT DES
        this.firestore.collection('product').doc(this.id).get().toPromise()
        .then((product) => {
          if(product.data() != undefined){
            this.productDes = product.data();
            this.getShopDes()
          }
          else{
            this.router.navigate(['/report-product-admin-list']);
          }
        })
    }
    else{
      this.router.navigate(['/report-product-admin-list']);
    }
  }

  getShopDes(){
    this.firestore.collection('shop').doc(this.productDes.sellerUID).get().toPromise()
      .then((shop) => {
        if(shop.data() != undefined){
          this.shopDes = shop.data();
          this.showContent = true;
        }
        else{
          this.router.navigate(['/report-product-admin-list']);
        }
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
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.productDes.sellerUID).collection('notifications').add({
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
          this.router.navigate(['/report-product-admin-list']);
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
