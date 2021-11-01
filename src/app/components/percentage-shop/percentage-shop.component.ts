import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-percentage-shop',
  templateUrl: './percentage-shop.component.html',
  styleUrls: ['./percentage-shop.component.css']
})
export class PercentageShopComponent implements OnInit {

  public placeholderPaymentType = 'กรุณาเลือก'
  public perNumber:Number = 0;
  public shopUIDArr:any = []; 
  public errorText = ''
  public checkUpdateOk = false;
  public percenInput = '';
  public uidInput = '';

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('percentage');
  }

  selectPaymentType(type) {
    this.placeholderPaymentType = type
  }

  checkUpdate(perNumberInput, shopUIDInput){
    if(this.placeholderPaymentType == 'กรุณาเลือก'){
      this.errorText = "กรุณาเลือกประเภทการชำระเงิน"
      this.checkUpdateOk = false
    }
    else if(perNumberInput == ''){
      this.errorText = "กรุณาเพิ่มเปอร์เซ็นต์ร้านที่ต้องการเปลี่ยนแปลง"
      this.checkUpdateOk = false
    }
    else if(shopUIDInput == ''){
      this.errorText = "กรุณาเพิ่มรหัสร้านค้า"
      this.checkUpdateOk = false
    }
    else if(shopUIDInput.split(",").length > 200){
      this.errorText = "รหัสร้านค้าเกิน 200 ร้านค้า"
      this.checkUpdateOk = false
    }
    else {
      this.perNumber = Number(perNumberInput);
      this.shopUIDArr = shopUIDInput.split(",");
      // SPLIT UID BY ","
      this.errorText = 'ยืนยันการเปลี่ยนแปลง ?';
      this.checkUpdateOk = true;
    }
  }

  updatePercen(){
    if(this.checkUpdateOk){
      // console.log('UP DATE')
      if(this.placeholderPaymentType == 'Debit/Credit'){
        for(var i=0; i<this.shopUIDArr.length; i++){
          this.firestore.collection('user-seller').doc(this.shopUIDArr[i]).update({
            'percenFinance.debitCredit': this.perNumber
          })
        }
      }
      else if(this.placeholderPaymentType == 'Debit/Credit ต่างประเทศ'){
        for(var i=0; i<this.shopUIDArr.length; i++){
          this.firestore.collection('user-seller').doc(this.shopUIDArr[i]).update({
            'percenFinance.debitCreditInter': this.perNumber
          })
        }
      }
      else if(this.placeholderPaymentType == 'e-Wallet'){
        for(var i=0; i<this.shopUIDArr.length; i++){
          this.firestore.collection('user-seller').doc(this.shopUIDArr[i]).update({
            'percenFinance.eWallet': this.perNumber
          })
        }
      }
      else if(this.placeholderPaymentType == 'QR Payment'){
        for(var i=0; i<this.shopUIDArr.length; i++){
          this.firestore.collection('user-seller').doc(this.shopUIDArr[i]).update({
            'percenFinance.qrPayment': this.perNumber
          })
        }
      }
      // RESET VALUE INPUT
      this.placeholderPaymentType = 'กรุณาเลือก';
      this.percenInput = '';
      this.uidInput = '';
    }
  } 

}
