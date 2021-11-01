import { Component, OnInit } from '@angular/core';
// FIREBASE
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public showContent = true
  public showFromLogin = true
  public showForgotPass = false;
  public status = false;
  public textError = 'ต้องการเปลี่ยนรหัสผ่าน ?';
  public emailForResetPass: any;
  public resetPassStatus = false;

  constructor(    
    public firestore: AngularFirestore, 
    public auth: AuthService,
    ) { 
      auth.getCurrentLoggedIn();
    }

  ngOnInit(): void {
  }

  forgotPass() {
    this.showFromLogin = false;
    this.showForgotPass = true;
  }
  
  backWard() {
    this.showFromLogin = true;
    this.showForgotPass = false;
  }

  subMitLogin(email , password) {
    this.auth.emailSignin(email, password)
  }

  resetPass(email) {
    // console.log(email)
    if(email != ''){
      this.emailForResetPass = email
      this.textError = 'ต้องการเปลี่ยนรหัสผ่าน ?'
      this.status = true
    }
    else {
      this.status = false
      this.textError = 'กรุณาเพิ่ม Email'
    }
  }

  firebaseResetPass() {

  }

}
