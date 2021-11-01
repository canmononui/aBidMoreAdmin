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
  selector: 'app-return-product-sendback-wrong-detail',
  templateUrl: './return-product-sendback-wrong-detail.component.html',
  styleUrls: ['./return-product-sendback-wrong-detail.component.css']
})
export class ReturnProductSendbackWrongDetailComponent implements OnInit {
  
  public id;
  public orderDes: any;
  public showContent = false;
  public imgUrl = '';
  public shopAddress = ''
  public buyerName = ''
  public buyerAddress = ''
  public notAppCheck = false;
  public appCheck = false;

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('returnProduct');
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    if (this.id) {
      this.firestore.collection('order').doc(this.id).get().toPromise()
        .then((orderDes) => {
          console.log(orderDes.data())
          if (orderDes.data() != undefined) {
            this.orderDes = orderDes.data();
            // SHOP ADDRESS
            if (this.orderDes.delivery.sellerAddress.number != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.number
            }
            if (this.orderDes.delivery.sellerAddress.moo != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.moo
            }
            if (this.orderDes.delivery.sellerAddress.village != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.village
            }
            if (this.orderDes.delivery.sellerAddress.lane != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.lane
            }
            if (this.orderDes.delivery.sellerAddress.road != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.road
            }
            if (this.orderDes.delivery.sellerAddress.subDistrict != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.subDistrict
            }
            if (this.orderDes.delivery.sellerAddress.district != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.district
            }
            if (this.orderDes.delivery.sellerAddress.province != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.province
            }
            if (this.orderDes.delivery.sellerAddress.postalCode != "") {
              this.shopAddress = this.shopAddress + " " + this.orderDes.delivery.sellerAddress.postalCode
            }
            if (this.orderDes.delivery.sellerAddress.phone != "") {
              this.shopAddress = this.shopAddress + " (" + this.orderDes.delivery.sellerAddress.phone + ")"
            }
            // SET BUYYER NAME FOR PDF
            if (this.orderDes.delivery.buyyerAddress.dataAddress.name != "") {
              this.buyerName = this.orderDes.delivery.buyyerAddress.dataAddress.name
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.lastName != "") {
              this.buyerName = this.buyerName + " " + this.orderDes.delivery.buyyerAddress.dataAddress.lastName
            }
            // SET BUYYER ADDRESS FOR PDF
            if (this.orderDes.delivery.buyyerAddress.dataAddress.number != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.number
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.moo != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.moo
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.village != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.village
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.lane != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.lane
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.road != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.road
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.subDistrict != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.subDistrict
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.district != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.district
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.province != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.province
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.postalCode != "") {
              this.buyerAddress = this.buyerAddress + " " + this.orderDes.delivery.buyyerAddress.dataAddress.postalCode
            }
            if (this.orderDes.delivery.buyyerAddress.dataAddress.phone != "") {
              this.buyerAddress = this.buyerAddress + " (" + this.orderDes.delivery.buyyerAddress.dataAddress.phone + ")"
            }

            this.showContent = true;
          }
          else {
            this.router.navigate(['/return-product-sendback-wrong-list']);
          }
        })
    }
    else {
      this.router.navigate(['/return-product-sendback-wrong-list']);
    }
  }

  popUpImg(imgUrl) {
    this.imgUrl = imgUrl;
  }

  notAppInput(dataInput) {
    if (dataInput.target.value == '') {
      this.notAppCheck = false;
    }
    else {
      this.notAppCheck = true;
    }
  }

  appInput(dataInput) {
    if (dataInput.target.value == '') {
      this.appCheck = false;
    }
    else {
      this.appCheck = true;
    }
  }

  
  notApprove(notAppReasonInput) {
    // console.log(notAppReasonInput)
    // UPDATE ORDER DES [RETURN]
    this.firestore.collection('order').doc(this.id).update({
      'returnProduct.adminReceiveAt': firebase.firestore.Timestamp.now(),
      'returnProduct.adminReceiveDes': notAppReasonInput,
      'returnProduct.adminReceiveWhoWin': 'buyer',
      'returnProduct.status': 'success'
    })
      .then((orderDes) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.orderDes.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'ข้อโต้แย้งการคืนสินค้าถูกปฏิเสธ',
          description: 'เหตุผลการปฏิเสธข้อโต้แย้ง ' + notAppReasonInput,
          product: {
            productKey: this.orderDes.productKey,
            productName: this.orderDes.productName,
            imgProduct1: {
              imgUrl: this.orderDes.imgProduct[0].imgUrl,
              imgpath: this.orderDes.imgProduct[0].imgpath
            },
            orderNo: this.orderDes.orderNo
          },
          type: 'order',
          readed: false
        })
          .then(() => {
            // ADD NOTI BUYER
            this.firestore.collection('user-buyer').doc(this.orderDes.buyerUID).collection('notifications').add({
              createAt: firebase.firestore.Timestamp.now(),
              topic: 'การร้องขอการคืนสินค้าถูกอนุมัติ',
              description: 'การร้องขอการคืนสินค้าถูกอนุมัติเนื่องจาก ' + notAppReasonInput,
              product: {
                productKey: this.orderDes.productKey,
                productName: this.orderDes.productName,
                imgProduct1: {
                  imgUrl: this.orderDes.imgProduct[0].imgUrl,
                  imgpath: this.orderDes.imgProduct[0].imgpath
                },
                orderNo: this.orderDes.orderNo
              },
              type: 'order',
              readed: false
            })
              .then(() => {
                this.router.navigate(['/return-product-sendback-wrong-list']);
              })
          })
      })
  }

  approve(appReasonInput) {
    // console.log(appReasonInput)
    // UPDATE ORDER DES [RETURN]
    this.firestore.collection('order').doc(this.id).update({
      'returnProduct.adminReceiveAt': firebase.firestore.Timestamp.now(),
      'returnProduct.adminReceiveDes': appReasonInput,
      'returnProduct.adminReceiveWhoWin': 'seller',
      'returnProduct.status': 'success' 
    })
      .then((orderDes) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.orderDes.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'ข้อโต้แย้งการคืนสินค้าถูกอนุมัติ',
          description: 'ข้อโต้แย้งการคืนสินค้าถูกอนุมัติ ' + appReasonInput,
          product: {
            productKey: this.orderDes.productKey,
            productName: this.orderDes.productName,
            imgProduct1: {
              imgUrl: this.orderDes.imgProduct[0].imgUrl,
              imgpath: this.orderDes.imgProduct[0].imgpath
            },
            orderNo: this.orderDes.orderNo
          },
          type: 'order',
          readed: false
        })
          .then(() => {
            // ADD NOTI BUYER
            this.firestore.collection('user-buyer').doc(this.orderDes.buyerUID).collection('notifications').add({
              createAt: firebase.firestore.Timestamp.now(),
              topic: 'การร้องขอการคืนสินค้าถูกปฏิเสธ',
              description: 'เหตุผลการปฏิเสธการร้องขอการคืนสินค้า ' + appReasonInput,
              product: {
                productKey: this.orderDes.productKey,
                productName: this.orderDes.productName,
                imgProduct1: {
                  imgUrl: this.orderDes.imgProduct[0].imgUrl,
                  imgpath: this.orderDes.imgProduct[0].imgpath
                },
                orderNo: this.orderDes.orderNo
              },
              type: 'order',
              readed: false
            })
              .then(() => {
                this.router.navigate(['/return-product-sendback-wrong-list']);
              })
          })
      })
  }

  gotoChatRoom(){
    this.firestore.collection('user-buyer').doc(this.orderDes.buyerUID).get().toPromise()
    .then((userBuyer) => {
      if(userBuyer.data() != undefined){
        // CAN GET USER BUYER DATA
        var _userBuyer:any = userBuyer.data();
        // CHECK CHAT 
        this.firestore.collection('chat', ref => ref
        .where(`members.${this.auth.currentUserId}.uid`, '==', this.auth.currentUserId)
        .where(`members.${this.orderDes.buyerUID}.uid`, '==', this.orderDes.buyerUID)
        ).get().toPromise()
        .then((val) => {
          // console.log(val)
          if(val.size != 0){
            // OLD CHAT
            // GO TO CHAT BUYER
            this.router.navigate([`/noti-chat-reply/${val.docs[0].id}&${this.orderDes.buyerUID}&${_userBuyer.displayName}`]);
          }
          else{
            // NEW CHAT 
            // GO TO CHAT BUYER
            this.router.navigate([`/noti-chat-reply/null&${this.orderDes.buyerUID}&${_userBuyer.displayName}`]);
          }
        })
      }
      else{
        // CANT GET USER BUYER DATA
        // CHECK CHAT 
        this.firestore.collection('chat', ref => ref
        .where(`members.${this.auth.currentUserId}.uid`, '==', this.auth.currentUserId)
        .where(`members.${this.orderDes.buyerUID}.uid`, '==', this.orderDes.buyerUID)
        ).get().toPromise()
        .then((val) => {
          // console.log(val)
          if(val.size != 0){
            // OLD CHAT
            // GO TO CHAT BUYER
            this.router.navigate([`/noti-chat-reply/${val.docs[0].id}&${this.orderDes.buyerUID}&ห้องสนทนา (ไม่มีชื่อ)`]);
          }
          else{
            // NEW CHAT 
            // GO TO CHAT BUYER
            this.router.navigate([`/noti-chat-reply/null&${this.orderDes.buyerUID}&ห้องสนทนา (ไม่มีชื่อ)`]);
          }
        })
      }
    })
  }

  copyProductKey() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.orderDes.productKey;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  copyTrackNumber() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.orderDes.delivery.trackingNumber;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
