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
  selector: 'app-buyyer-account-detail',
  templateUrl: './buyyer-account-detail.component.html',
  styleUrls: ['./buyyer-account-detail.component.css']
})
export class BuyyerAccountDetailComponent implements OnInit {

  public id;
  public userBuyer: any;
  public showContent = false;
  public userBuyerAddressList = [];
  public textButtonBan = '';
  public banUserBuyerCheck = false;
  public productLike = [];
  public followSeller = [];

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('buyyer');
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    if (this.id) {
      this.firestore.collection('user-buyer').doc(this.id).valueChanges()
        .subscribe(val => {
          if (val != undefined) {
            this.userBuyer = val;
            // console.log(this.userBuyer);
            if (this.userBuyer.profileImg.imgUrl == null) {
              this.userBuyer.profileImg.imgUrl = './assets/img/profile-icon-BG.svg';
            }
            if (this.userBuyer.gender != null) {
              if (this.userBuyer.gender == 'male') {
                this.userBuyer.gender = 'ชาย';
              }
              else if (this.userBuyer.gender == 'female') {
                this.userBuyer.gender = 'หญิง';
              }
              else {
                this.userBuyer.gender = 'ไม่ระบุ';
              }
            }
            // if (this.userBuyer.userStatus == 'approve') {
            //   this.textButtonBan = 'ระงับการใช้งานบัญชีนี้';
            // }
            // else {
            //   this.textButtonBan = 'ยกเลิกระงับการใช้งานบัญชีนี้';
            // }
            this.getAddress();
            this.getProductLike();
            this.getFollowSeller();
            // this.getOrder();
          }
          else {
            this.router.navigate(['/buyyer-account-list']);
          }
        })
    }
    else {
      this.router.navigate(['/buyyer-account-list']);
    }
  }

  getProductLike(){
    this.firestore.collection('user-buyer').doc(this.id).collection('like').get().toPromise()
      .then((querySnapshot) => {
        if (querySnapshot.size != 0) {
          querySnapshot.forEach((doc) => {
            this.productLike.push({
              key: doc.id,
              value: doc.data()
            })
          })
        }
        else {
          this.productLike = [];
        }
      });
  }

  getFollowSeller(){
    this.firestore.collection('user-buyer').doc(this.id).collection('following-seller').get().toPromise()
    .then((querySnapshot) => {
      if (querySnapshot.size != 0) {
        querySnapshot.forEach((doc) => {
          this.followSeller.push({
            key: doc.id,
            value: doc.data()
          })
        })
      }
      else {
        this.followSeller = [];
      }
    });
  }

  // getOrder(){
  //   this.firestore.collection('order', ref => ref
  //   .where('buyerUID', '==', this.id )
  //   ).get().toPromise()
  //   .then((querySnapshot) => {
  //     console.log(querySnapshot)
  //     if (querySnapshot.size != 0) {
  //       querySnapshot.forEach((doc) => {
  //         var _docData:any = doc.data();
  //         console.log(_docData)
  //         if(_docData.status == 'cart'){
  //           this.orderCart.push({
  //             key: doc.id,
  //             value: doc.data()
  //           })
  //         }
  //         else if(_docData.status = ''){
            
  //         }
  //       })
  //       console.log(this.orderCart)
  //     }
  //     else {
  //       this.order = [];
  //     }
  //   });
  // }

  getAddress() {
    this.firestore.collection('user-buyer').doc(this.id).collection('address').get().toPromise()
      .then((querySnapshot) => {
        // console.log(querySnapshot)
        if (querySnapshot.size != 0) {
          querySnapshot.forEach((doc) => {
            this.userBuyerAddressList.push({
              key: doc.id,
              value: doc.data()
            })
          })
        }
        else {
          this.userBuyerAddressList = [];
        }
        this.showContent = true;
      })
  }

  copyMail() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.userBuyer.email;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  copyUID() {
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

  banUserBuyerInput(dataInput) {
    if (dataInput.target.value == '') {
      this.banUserBuyerCheck = false;
    }
    else {
      this.banUserBuyerCheck = true;
    }
  }

  banUserBuyer(reasonInput_) {
    this.firestore.collection('user-buyer').doc(this.id).update({
      userStatus: 'banByAdmin',
      accountBan: {
        banAt: firebase.firestore.Timestamp.now(),
        reason: reasonInput_,
        banByAdminUID: this.auth.currentUserId
      }
    })
  }
  
  unBanUserBuyer(){
    this.firestore.collection('user-buyer').doc(this.id).update({
      userStatus: 'approve',
      accountBan: firebase.firestore.FieldValue.delete()
    })
  }
}
