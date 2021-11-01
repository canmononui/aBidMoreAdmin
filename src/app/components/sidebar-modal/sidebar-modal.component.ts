import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LinkPathService } from '../../services/link-path.service';
import { AuthService } from '../../services/auth.service';
// FIREBASE
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.css']
})
export class SidebarModalComponent implements OnInit {

  public showContent = true;
  authState: any = null;
  public userAdmin: any = null;
  public sidebarDisabled = true;
  public chatCountBuyer = '0';
  public chatCountSeller = '0';
  public countReportProduct = '0';
  public countReturnProduct = '0';
  public countSellerwiatApp = '0';
  
  constructor(
    private afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router:Router,
    public path: LinkPathService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
      // console.log(this.authState)
      if(this.authState != null){
        this.firestore.collection('user-admin').doc(this.authState.uid).valueChanges()
        .subscribe(val => {
          this.userAdmin = val;
          // console.log(this.userAdmin)
          if(this.userAdmin.accountStatus){
            this.sidebarDisabled = false
            // console.log(this.authState.uid)

            // COUNT SELLER WAITING APPROVE
            this.firestore.collection('user-seller', ref => ref
            .where("shopStatus", "==", 'waitingApproval')
            ).snapshotChanges()
            .map(actions => {
              return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
            }).subscribe(userSeller => {
              var _userSeller:any = userSeller;
              if(_userSeller.length != 0){
                if(_userSeller.length > 99){
                  this.countSellerwiatApp = '99+';
                }
                else{
                  this.countSellerwiatApp = String(_userSeller.length);
                }
              }
              else {
                this.countSellerwiatApp = '0';
              }
            });

            // COUNT REPORT PRODUCT
            this.firestore.collection('report-product', ref => ref
            .where("readed", "==", false)
            ).snapshotChanges()
            .map(actions => {
              return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
            }).subscribe(report => {
              var _report:any = report;
              if(_report.length != 0){
                if(_report.length > 99){
                  this.countReportProduct = '99+';
                }
                else{
                  this.countReportProduct = String(_report.length);
                }
              }
              else {
                this.countReportProduct = '0';
              }
            });

            // COUNT RETURN PRODUCT
            this.firestore.collection('order', ref => ref
            .where('returnProduct.status', 'in', ['sellerArgueRequest', 'sellerArgueReceive'] )
            ).snapshotChanges()
            .map(actions => {
              return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
            }).subscribe(returnProduct => {
              var _return:any = returnProduct;
              if(_return.length != 0){
                if(_return.length > 99){
                  this.countReturnProduct = '99+';
                }
                else{
                  this.countReturnProduct = String(_return.length);
                }
              }
              else {
                this.countReturnProduct = '0';
              }
            });

            // CHAT COUNT
            this.firestore.collection('chat', ref => ref
            .where(`readed.${this.authState.uid}`, '==', false )
            ).snapshotChanges()
              .map(actions => {
                return actions.map(action => ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
              }).subscribe(chat => {
                // console.log(chat.length)
                // console.log(chat)
                var _chat:any = chat;
                var countBuyer:any = 0;
                var countSeller:any = 0;
                for(var i=0; i<_chat.length; i++){
                  var _members:any = Object.keys(_chat[i].value.members);
                  if (_chat[i].value.members[_members[0]].uid != this.authState.uid && _chat[i].value.members[_members[0]].type == 'buyer') {
                    countBuyer++
                  }
                  else if (_chat[i].value.members[_members[1]].uid != this.authState.uid && _chat[i].value.members[_members[1]].type == 'buyer') {
                    countBuyer++
                  }
                  else if (_chat[i].value.members[_members[0]].uid != this.authState.uid && _chat[i].value.members[_members[0]].type == 'seller') {
                    countSeller++
                  }
                  else if (_chat[i].value.members[_members[1]].uid != this.authState.uid && _chat[i].value.members[_members[1]].type == 'seller') {
                    countSeller++
                  }
                }
                if(countBuyer > 99){
                  this.chatCountBuyer = '99+';
                }
                else{
                  this.chatCountBuyer = String(countBuyer);
                }
                if(countSeller > 99){
                  this.chatCountSeller = '99+';
                }
                else{
                  this.chatCountSeller = String(countSeller);
                }
              // console.log(this.chatCountBuyer, this.chatCountSeller)
              })
          }
          else{
            this.sidebarDisabled = true
          }
        })
      }
      else {
        this.sidebarDisabled = true
      }
    })
  }

}
