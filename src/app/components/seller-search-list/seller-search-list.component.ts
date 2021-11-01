import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-seller-search-list',
  templateUrl: './seller-search-list.component.html',
  styleUrls: ['./seller-search-list.component.css']
})
export class SellerSearchListComponent implements OnInit {

  public userSellerList:any = [];
  public showContent = false;
  public noMatchData = false;

  constructor(
    public path: LinkPathService,
    public router: Router,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('seller');
  }

  searchUserSellerInput(dataInput){
    if(dataInput.target.value == ''){
      this.userSellerList = [];
      this.noMatchData = false;
      this.showContent = true;
    }
  }

  searchUserSeller(searchInput){
    if(searchInput != ''){
      this.userSellerList = [];
      // SEARCH BY DISPLAY NAME
      this.firestore.collection('user-seller', ref => ref
      .where('email', '==', searchInput)
      ).snapshotChanges()
      .map(actions => {
        return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
      }).subscribe(items => {
        if(items.length != 0){
          this.userSellerList = items;
          // console.log(this.userBuyerList)
          for(var i=0; i<this.userSellerList.length; i++){
            if(this.userSellerList[i].value.profileImg.imgUrl == null){
              this.userSellerList[i].value.profileImg.imgUrl = './assets/img/seller-profile/store-icon.png';
            }
          }
          this.noMatchData = false;
          this.showContent = true;
        }
        else {
          // SEARCH BY UID
          this.firestore.collection('user-seller', ref => ref
          .where('uid', '==', searchInput)
          ).snapshotChanges()
          .map(actions => {
            return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
          }).subscribe(items => {
            if(items.length != 0){
              this.userSellerList = items;
              // console.log(this.userBuyerList)
              for(var i=0; i<this.userSellerList.length; i++){
                if(this.userSellerList[i].value.profileImg.imgUrl == null){
                  this.userSellerList[i].value.profileImg.imgUrl = './assets/img/seller-profile/store-icon.png';
                }
              }
              this.noMatchData = false;
              this.showContent = true;
            }
            else {
              // NO DATA USER BUYER MATCH FOR SEARCH
              this.userSellerList = [];
              this.noMatchData = true;
              this.showContent = true;
            }
          })
        }
      });
    }
  }

  userSellerDetail(key){
    this.router.navigate([`/seller-search-detail/${key}`]);
  }

}
