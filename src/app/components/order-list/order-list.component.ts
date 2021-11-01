import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orderList:any = [];
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
    this.path.setPath('order');
  }

  searchOrderInput(dataInput){
    if(dataInput.target.value == ''){
      this.orderList = [];
      this.noMatchData = false;
      this.showContent = true;
    }
  }

  searchOrder(searchInput){
    if(searchInput != ''){
      this.orderList = [];
      // SEARCH BY DISPLAY NAME
      this.firestore.collection('order', ref => ref
      .where('orderNo', '==', searchInput)
      ).snapshotChanges()
      .map(actions => {
        return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
      }).subscribe(items => {
        if(items.length != 0){
          this.orderList = items;
          // console.log(this.userBuyerList)
          // for(var i=0; i<this.orderList.length; i++){
          //   if(this.orderList[i].value.profileImg.imgUrl == null){
          //     this.orderList[i].value.profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
          //   }
          // }
          this.noMatchData = false;
          this.showContent = true;
        }
        else {
          // NO DATA USER BUYER MATCH FOR SEARCH
          this.orderList = [];
          this.noMatchData = true;
          this.showContent = true;
        }
        // else {
        //   // SEARCH BY UID
        //   this.firestore.collection('order', ref => ref
        //   .where('orderNo', '==', searchInput)
        //   ).snapshotChanges()
        //   .map(actions => {
        //     return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
        //   }).subscribe(items => {
        //     if(items.length != 0){
        //       this.orderList = items;
        //       // console.log(this.userBuyerList)
        //       for(var i=0; i<this.orderList.length; i++){
        //         if(this.orderList[i].value.profileImg.imgUrl == null){
        //           this.orderList[i].value.profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
        //         }
        //       }
        //       this.noMatchData = false;
        //       this.showContent = true;
        //     }
        //     else {
        //       // NO DATA USER BUYER MATCH FOR SEARCH
        //       this.orderList = [];
        //       this.noMatchData = true;
        //       this.showContent = true;
        //     }
        //   })
        // }
      });
    }
  }

  orderDetail(key){
    this.router.navigate([`/order-detail/${key}`]);
  }

}
