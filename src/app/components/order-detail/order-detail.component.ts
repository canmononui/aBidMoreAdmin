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
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  public id;
  public showContent = false;
  // public userBuyerAddressList = [];
  // public textButtonBan = '';
  // public banUserBuyerCheck = false;
  // public productLike = [];
  // public followSeller = [];
  public textShowProductDescription = 'แสดง';
  public showProductDescription = false;
  public order:any;
  public shopAddress = 'แสดง';
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
    this.path.setPath('order');
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    if (this.id) {
      this.firestore.collection('order').doc(this.id).valueChanges()
        .subscribe(val => {
          if (val != undefined) {
            this.order = val;
            if(this.order.delivery.sellerAddress.name != ""){
              this.shopAddress = this.order.delivery.sellerAddress.name
            }
            if(this.order.delivery.sellerAddress.lastName != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.lastName
            }
            if(this.order.delivery.sellerAddress.number != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.number
            }
            if(this.order.delivery.sellerAddress.moo != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.moo
            }
            if(this.order.delivery.sellerAddress.village != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.village
            }
            if(this.order.delivery.sellerAddress.lane != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.lane
            }
            if(this.order.delivery.sellerAddress.road != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.road
            }
            if(this.order.delivery.sellerAddress.subDistrict != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.subDistrict
            }
            if(this.order.delivery.sellerAddress.district != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.district
            }
            if(this.order.delivery.sellerAddress.province != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.province
            }
            if(this.order.delivery.sellerAddress.postalCode != ""){
              this.shopAddress = this.shopAddress + " " + this.order.delivery.sellerAddress.postalCode
            }
            if(this.order.delivery.sellerAddress.phone != ""){
              this.shopAddress = this.shopAddress + " (" + this.order.delivery.sellerAddress.phone + ")"
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
            this.router.navigate(['/order-list']);
          }
        })
    }
    else {
      this.router.navigate(['/order-list']);
    }
  }

  clickShowDes(){
    if(this.showProductDescription){
      this.showProductDescription = false;
      this.textShowProductDescription = 'แสดง';
    }
    else {
      this.showProductDescription = true;
      this.textShowProductDescription = 'น้อยลง';
    }
  }

  copyTrackNumber() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.order.delivery.trackingNumber;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  

}
