import { Component, OnInit } from '@angular/core';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin-status-waiting',
  templateUrl: './signin-status-waiting.component.html',
  styleUrls: ['./signin-status-waiting.component.css']
})
export class SigninStatusWaitingComponent implements OnInit {

  public id;
  public userAdmin:any;
  public showContent = false;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
    if(this.id){ 
      this.firestore.collection('user-admin').doc(this.id).get().toPromise()
      .then((userAdmin) => {
        console.log(userAdmin.data());
        var _userAdmin:any = userAdmin.data();
        if(_userAdmin != undefined){
          if(_userAdmin.accountStatus){
            this.router.navigate(['/seller-account-approve-list']);
          }
          else{
            this.userAdmin = _userAdmin;
            this.showContent = true;
          }
        }
        else{
          this.goTosignIn();
        }
      }) 
    }
    else{
      this.goTosignIn();
    }
  }

  goTosignIn(){
    this.router.navigate(['/']);
  }

}
