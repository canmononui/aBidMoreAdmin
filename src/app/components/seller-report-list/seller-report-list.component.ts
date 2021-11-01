import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-seller-report-list',
  templateUrl: './seller-report-list.component.html',
  styleUrls: ['./seller-report-list.component.css']
})
export class SellerReportListComponent implements OnInit {

  public reportList:any = [];
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
    this.firestore.collection('report-review', ref => ref
    .where("readed", "==", false)
    .orderBy('createAt', 'desc')
    .limit(10)
    ).snapshotChanges()
    .map(actions => {
      return actions.map(action =>  ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
    }).subscribe(items => {
      console.log('items : ',items);
      if(items.length != 0){
        // console.log('no',items)
        this.reportList = items;
        this.showContent = true;
        this.showNoList = false;
      }
      else {
        this.reportList = [];
        this.showContent = true;
        this.showNoList = true;
      }
    });
  }

  gotoProductDetail(key){
    this.router.navigate([`/seller-report-detail/${key}`]);
  }

}
