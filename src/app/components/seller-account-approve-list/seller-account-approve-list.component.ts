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
  selector: 'app-seller-account-approve-list',
  templateUrl: './seller-account-approve-list.component.html',
  styleUrls: ['./seller-account-approve-list.component.css']
})
export class SellerAccountApproveListComponent implements OnInit {

  public userSellerWAList:any = [];
  public showContent = false;
  public showNoList = false;

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
    this.firestore.collection('user-seller', ref => ref
    .where('shopStatus', "==", 'waitingApproval')
    .orderBy('createAt', 'desc')
    .limit(10)
    ).snapshotChanges()
    .map(actions => {
      return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
    }).subscribe(items => {
      // console.log('items : ',items);
      if(items.length != 0){
        // console.log('no',items)
        this.userSellerWAList = items;
        for(var i=0; i<this.userSellerWAList.length; i++){
          if(this.userSellerWAList[i].value.profileImg.imgUrl == null){
            this.userSellerWAList[i].value.profileImg.imgUrl = './assets/img/seller-profile/store-icon.png';
          }
        }
        this.showContent = true;
        this.showNoList = false;
      }
      else {
        this.userSellerWAList = [];
        this.showContent = true;
        this.showNoList = true;
      }
    });
  }

  gotoAccApp(key){
    this.router.navigate([`/seller-account-approve-detail/${key}`]);
  }

}
