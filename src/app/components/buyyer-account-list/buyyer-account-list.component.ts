import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-buyyer-account-list',
  templateUrl: './buyyer-account-list.component.html',
  styleUrls: ['./buyyer-account-list.component.css']
})
export class BuyyerAccountListComponent implements OnInit {

  public userBuyerList:any = [];
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
    this.path.setPath('buyyer');
  }

  searchUserBuyerInput(dataInput){
    if(dataInput.target.value == ''){
      this.userBuyerList = [];
      this.noMatchData = false;
      this.showContent = true;
    }
  }

  searchUserBuyer(searchInput){
    if(searchInput != ''){
      this.userBuyerList = [];
      // SEARCH BY DISPLAY NAME
      this.firestore.collection('user-buyer', ref => ref
      .where('email', '==', searchInput)
      ).snapshotChanges()
      .map(actions => {
        return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
      }).subscribe(items => {
        if(items.length != 0){
          this.userBuyerList = items;
          // console.log(this.userBuyerList)
          for(var i=0; i<this.userBuyerList.length; i++){
            if(this.userBuyerList[i].value.profileImg.imgUrl == null){
              this.userBuyerList[i].value.profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
            }
          }
          this.noMatchData = false;
          this.showContent = true;
        }
        else {
          // SEARCH BY UID
          this.firestore.collection('user-buyer', ref => ref
          .where('uid', '==', searchInput)
          ).snapshotChanges()
          .map(actions => {
            return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
          }).subscribe(items => {
            if(items.length != 0){
              this.userBuyerList = items;
              // console.log(this.userBuyerList)
              for(var i=0; i<this.userBuyerList.length; i++){
                if(this.userBuyerList[i].value.profileImg.imgUrl == null){
                  this.userBuyerList[i].value.profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
                }
              }
              this.noMatchData = false;
              this.showContent = true;
            }
            else {
              // NO DATA USER BUYER MATCH FOR SEARCH
              this.userBuyerList = [];
              this.noMatchData = true;
              this.showContent = true;
            }
          })
        }
      });
    }
  }

  userBuyerDetail(key){
    this.router.navigate([`/buyyer-account-detail/${key}`]);
  }

}
