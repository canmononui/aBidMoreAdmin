import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-report-product-list',
  templateUrl: './report-product-list.component.html',
  styleUrls: ['./report-product-list.component.css']
})
export class ReportProductListComponent implements OnInit {

  public productList:any = [];
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
    this.path.setPath('reportProduct');
    this.firestore.collection('report-product', ref => ref
    .where("readed", "==", false)
    .orderBy('updateAt', 'desc')
    .limit(10)
    ).snapshotChanges()
    .map(actions => {
      return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
    }).subscribe(items => {
      // console.log('items : ',items);
      if(items.length != 0){
        // console.log('no',items)
        this.productList = items;
        // for(var i=0; i<this.userSellerWAList.length; i++){
        //   if(this.userSellerWAList[i].value.profileImg.imgUrl == null){
        //     this.userSellerWAList[i].value.profileImg.imgUrl = './assets/img/seller-profile/store-icon.png';
        //   }
        // }
        this.showContent = true;
        this.showNoList = false;
      }
      else {
        this.productList = [];
        this.showContent = true;
        this.showNoList = true;
      }
    });
  }

  gotoProductDetail(key){
    this.router.navigate([`/report-product-detail/${key}`]);
  }

}
