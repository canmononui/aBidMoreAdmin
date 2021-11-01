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
  selector: 'app-seller-account-approve-detail',
  templateUrl: './seller-account-approve-detail.component.html',
  styleUrls: ['./seller-account-approve-detail.component.css']
})
export class SellerAccountApproveDetailComponent implements OnInit {

  public id;
  public userSeller: any;
  public showContent = false;
  public banUserSellerCheck = false;
  public fileItems: any = null;

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
    this.id = this.route.snapshot.paramMap.get("id");
    // console.log(this.id)
    if (this.id) {
      this.firestore.collection('user-seller').doc(this.id).get().toPromise()
      .then((doc) => {
        if(doc.data() != undefined){
          this.userSeller = doc.data();
          this.getFile();
          // this.showContent = true;
        }
        else{
          this.router.navigate(['/seller-account-approve-list']);
        }
      })
    }
    else{
      this.router.navigate(['/seller-account-approve-list']);
    }
  }

  getFile() {
    // FILE
    this.firestore.collection('user-seller').doc(this.id).collection('linkFile', ref => ref
    .limit(1)
    ).snapshotChanges()
    .map(actions => {
      return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
    }).subscribe(items => {
      // console.log('items', items.length)
      if(items.length != 0){
        this.fileItems = items[0].value
      }
      // console.log(this.fileItems)
      this.showContent = true;
    });
  }

  copyMail() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.userSeller.email;
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

  banUserSellerInput(dataInput) {
    if (dataInput.target.value == '') {
      this.banUserSellerCheck = false;
    }
    else {
      this.banUserSellerCheck = true;
    }
  }

  notApproveUserSeller(reasonInput_) {
    this.firestore.collection('user-seller').doc(this.id).update({
      shopStatus: 'notApprove',
      approveBy: {
        updateAt: firebase.firestore.Timestamp.now(),
        reason: reasonInput_,
        byAdminUID: this.auth.currentUserId
      }
    })
    .then((doc) => {
      this.router.navigate(['/seller-account-approve-list']);
    })
  }

  approveUserSeller(){
    this.firestore.collection('user-seller').doc(this.id).update({
      shopStatus: 'approve',
      approveBy: {
        updateAt: firebase.firestore.Timestamp.now(),
        byAdminUID: this.auth.currentUserId
      }
    })
    .then((doc) => {
      this.router.navigate(['/seller-account-approve-list']);
    })
  }

}
