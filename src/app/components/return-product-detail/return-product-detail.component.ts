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
  selector: 'app-return-product-detail',
  templateUrl: './return-product-detail.component.html',
  styleUrls: ['./return-product-detail.component.css']
})
export class ReturnProductDetailComponent implements OnInit {

  public id;
  public orderDes: any;
  public showContent = false;
  public imgUrl = '';
  public shopAddress = ''
  public buyerName = ''
  public buyerAddress = ''
  public notAppCheck = false;
  public appCheck = false;
  public transport:any = null;

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
          if (orderDes.data() != undefined) {
            this.orderDes = orderDes.data();
            // SHOP ADDRESS
            if (this.orderDes.delivery.sellerAddress.number != "") {
              this.shopAddress = this.orderDes.delivery.sellerAddress.number
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

            // GET TRANSPORT
            this.firestore.collection('order').doc(this.id).collection('transport', ref => ref
            .orderBy('updateAt', 'desc')
            .limit(1))
            .get().toPromise()
            .then((transport) => {
              if(!transport.empty){
                // TRANSPORT NOT EMPTY
                this.transport = transport.docs[0].data();
                this.transport.routes.forEach((doc) => {
                  if(doc.state == "1"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "เข้ารับพัสดุแล้ว";
                  }
                  else if(doc.state == "2"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "ศูนย์คัดแยกสินค้า";
                  }
                  else if(doc.state == "3"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "พัสดุอยู่ระหว่างทาง";
                  }
                  else if(doc.state == "4"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "พัสดุกำลังนำจ่าย";
                  }
                  else if(doc.state == "5"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "นำส่งสำเร็จ (ลงชื่อ)";
                  }
                  else if(doc.state == "6"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "มีปัญหาในการดำเนินการจัดส่ง";
                  }
                  else if(doc.state == "7"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "การส่งคืนสินค้า";
                  }
                  else if(doc.state == "8"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "ปิดโดยข้อยกเว้น";
                  }
                  else if(doc.state == "9"){
                    doc.stateTextEN = doc.stateText;
                    doc.stateTextTH = "ยกเลิกแล้ว";
                  }
                  else{
                    doc.stateTextEN = "No Data Found";
                    doc.stateTextTH = "ไม่พบข้อมูล";
                  }
                  doc.stateDate = Number(doc.stateDate*1000);
                })
              }
              else{
                // TRANSPORT EMPTY
                this.transport = null
              }
            })

            this.showContent = true;
          }
          else {
            this.router.navigate(['/return-product-list']);
          }
        })
    }
    else {
      this.router.navigate(['/return-product-list']);
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
      'returnProduct.adminRequestAt': firebase.firestore.Timestamp.now(),
      'returnProduct.adminRequestDes': notAppReasonInput,
      'returnProduct.adminRequestWhoWin': 'seller',
      'returnProduct.status': 'success'
    })
      .then((orderDes) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.orderDes.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'ข้อโต้แย้งการคืนสินค้าถูกอนุมัติ',
          description: 'ข้อโต้แย้งการคืนสินค้าถูกอนุมัติ ' + notAppReasonInput,
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
              description: 'เหตุผลการปฏิเสธการร้องขอการคืนสินค้า ' + notAppReasonInput,
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
                this.router.navigate(['/return-product-list']);
              })
          })
      })
  }

  approve(appReasonInput) {
    // console.log(appReasonInput)
    // UPDATE ORDER DES [RETURN]
    this.firestore.collection('order').doc(this.id).update({
      'returnProduct.adminRequestAt': firebase.firestore.Timestamp.now(),
      'returnProduct.adminRequestDes': appReasonInput,
      'returnProduct.adminRequestWhoWin': 'buyer',
      'returnProduct.returnProductShippingAddress': this.shopAddress,
      'returnProduct.status': 'returnProductShippingAdmin' 
    })
      .then((orderDes) => {
        // ADD NOTI SELLER
        this.firestore.collection('shop').doc(this.orderDes.sellerUID).collection('notifications').add({
          createAt: firebase.firestore.Timestamp.now(),
          topic: 'ข้อโต้แย้งการคืนสินค้าถูกปฏิเสธ',
          description: 'เหตุผลการปฏิเสธข้อโต้แย้ง ' + appReasonInput,
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
              description: 'การร้องขอการคืนสินค้าถูกอนุมัติเนื่องจาก ' + appReasonInput,
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
                this.router.navigate(['/return-product-list']);
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
