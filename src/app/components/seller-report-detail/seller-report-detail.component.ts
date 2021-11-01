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
  selector: 'app-seller-report-detail',
  templateUrl: './seller-report-detail.component.html',
  styleUrls: ['./seller-report-detail.component.css']
})
export class SellerReportDetailComponent implements OnInit {

  public id;
  // public report: any;
  // public buyerReport: any = [];
  // public productDes: any;
  // public showContent = false;
  // public imgUrl = '';
  // public banUserSellerCheck = false;
  public reportReview:any;
  public showContent = false;
  public notAppCheck = false;

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
        // GET REPORT REVIEW
        this.firestore.collection('report-review').doc(this.id).get().toPromise()
        .then((reportReview) => {
          this.reportReview = reportReview.data()
          this.showContent = true;
        })
    }
    else{
      this.router.navigate(['/seller-report-list']);
    }
  }

  notAppInput(dataInput) {
    if (dataInput.target.value == '') {
      this.notAppCheck = false;
    }
    else {
      this.notAppCheck = true;
    }
  }

  notAppReport(reasonInput){
    console.log(reasonInput)
    this.firestore.collection('report-review').doc(this.id).update({
      readed: true
    })
    .then(() => {
      // ADD NOTI SELLER
      this.firestore.collection('shop').doc(this.reportReview.sellerUID).collection('notifications').add({
        createAt: firebase.firestore.Timestamp.now(),
        topic: 'รีวิวสินค้าไม่ถูกระงับตามคำขอ',
        description: 'เหตุผลการไม่ระงับรีวิวสินค้า ' + reasonInput,
        product: {
          productKey: this.reportReview.productKey,
          imgProduct1: {
            imgUrl: this.reportReview.imgProduct1.imgUrl,
            imgpath: this.reportReview.imgProduct1.imgpath
          },
        },
        type: 'productNoti',
        readed: false
      })
      .then(() => {
        this.router.navigate(['/seller-report-list']);
      })
    })
  }

  appReport(){
    this.firestore.collection('report-review').doc(this.id).update({
      readed: true
    })
    .then(() => {
      // ADD NOTI SELLER
      this.firestore.collection('shop').doc(this.reportReview.sellerUID).collection('notifications').add({
        createAt: firebase.firestore.Timestamp.now(),
        topic: 'รีวิวสินค้าถูกระงับตามคำขอ',
        description: 'ระบบได้ระงับรีวิวสินค้าตามคำขอเรียบร้อย',
        product: {
          productKey: this.reportReview.productKey,
          imgProduct1: {
            imgUrl: this.reportReview.imgProduct1.imgUrl,
            imgpath: this.reportReview.imgProduct1.imgpath
          },
        },
        type: 'productNoti',
        readed: false
      })
      .then(() => {
        this.router.navigate(['/seller-report-list']);
      })
    })
  }

}
