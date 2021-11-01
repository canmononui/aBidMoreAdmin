import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;
  public statusLoginFail = false;
  public resetPassFail = false;
  
  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    public firestore: AngularFirestore,
    private afs: AngularFirestore) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
      // console.log('- AUTH - authState - ', this.authState)
    });
  }


  get authenticated(): boolean {
    return this.authState !== null;
  }

  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false
  }

  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest'
    } else if (this.currentUserAnonymous) {
      return 'Anonymous'
    } else {
      return this.authState['displayName'] || 'User without a Name'
    }
  }

  get statusloginFail() {
    return this.statusLoginFail;
  }

  get resetpassFail() {
    return this.resetPassFail;
  }

  get getAuthState() {
    return this.authState;
  }

  emailSignin(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        console.log('- AUTH - SIGNIN EMAIL --> ', user.user)
        this.firestore.collection('user-admin').doc(user.user.uid).get().toPromise()
        .then((userAdmin) => {
          if(userAdmin != undefined){
            var _userAdmin:any = userAdmin.data();
            // console.log(_userAdmin)
            if(_userAdmin.accountStatus){
              // ACCOUNT APPROVE
              this.router.navigate(['/seller-account-approve-list']);
            }
            else{
              // ACCOUNT NOT APPROVE GO TO => SIGNIN-STATUS-WAITING
              this.router.navigate([`/signin-status-waiting/${user.user.uid}`]);
            }
          }
          else{
            this.signOut()
          }
        })
        // CHECK THIS USER EMAIL VERIFIED ?
        // if (user.user.emailVerified) {
        //   // CHECK THIS USER PHONE NUMBER VERIFIED ?
        //   if(user.user.phoneNumber == null){
        //     // VERIFIED ENAIL SUCCESS !!BUT NOT VERIFIED NUMBER => GO TO UPDATE USER BUYER DES
        //     this.router.navigate([`/update-user-buyer/${user.user.uid}`])
        //   }
        //   else{
        //     // VERIFIED NUMBER SUCCESS => GO TO HOME PAGE
        //     this.router.navigate(['/'])
        //   }
        // }
        // else{
        //   this.afAuth.signOut()
        //   .then((msg) => {
        //     // this.authState = null;
        //     debugger
        //     this.router.navigate(['/check-email-verify'])
        //   })
        //   .catch(error => console.log(error));
        // }
      })
      .catch(error => {
        console.log(error)
        if (error) {
          // this.authState = null;
          this.statusLoginFail = true;
        }
      });
  }

  resetPassword(email: string) {
    const fbAuth = firebase.auth();
    return fbAuth.sendPasswordResetEmail(email)
  }

  getCurrentLoggedIn() {
    this.afAuth.authState.subscribe(auth => {
      // console.log(auth)
      if (auth) {
        // console.log(auth,'email - ',auth.email)
        // console.log(auth,'isAnonymous - ',auth.isAnonymous)
        if(auth.email != null && auth.isAnonymous == false){
          // CHECK TYPE ADMIN ?
          this.firestore.collection('user-admin').doc(auth.uid).get().toPromise()
          .then((userAdmin) => {
            if(userAdmin.data() != undefined){
              this.statusLoginFail = false;
              this.router.navigate(['/seller-account-approve-list'])
            }
            else{
              this.statusLoginFail = true;
            }
          })
          .catch(error => {
            console.log(error)
            if (error) {
              this.statusLoginFail = true;
            }
          });
        }
      }
    });
  }

  signOut(): void {
    this.afAuth.signOut()
      .then((msg) => {
        // console.log(msg)
        // this.authState = null;
        // this.addData = false;
        this.router.navigate(['/signin'])
      })
      .catch(error => console.log(error));
  }


}
