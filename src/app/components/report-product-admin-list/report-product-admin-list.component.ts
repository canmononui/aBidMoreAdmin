import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-report-product-admin-list',
  templateUrl: './report-product-admin-list.component.html',
  styleUrls: ['./report-product-admin-list.component.css']
})
export class ReportProductAdminListComponent implements OnInit {

  public productList: any = [];
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
    this.path.setPath('reportProduct');
  }

  searchProductInput(dataInput) {
    if (dataInput.target.value == '') {
      this.productList = [];
      this.noMatchData = false;
      this.showContent = true;
    }
  }

  searchProduct(searchInput) {
    if (searchInput != '') {
      this.productList = [];
      // SEARCH BY PRODUCT NAME
      this.firestore.collection('product', ref => ref
        .where('name', '==', searchInput)
      ).snapshotChanges()
        .map(actions => {
          return actions.map(action => ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
        }).subscribe(items => {
          if (items.length != 0) {
            this.productList = items;
            this.noMatchData = false;
            this.showContent = true;
          }
          else {
            // SEARCH BY PRODUCT DOC EKY
            this.firestore.collection('product').doc(searchInput).get().toPromise()
              .then((product) => {
                // console.log(product.data())
                if (product.data() != undefined) {
                  this.productList.push({
                    key: searchInput,
                    value: product.data()
                  })
                  this.noMatchData = false;
                  this.showContent = true;
                }
                else {
                  // NO DATA USER BUYER MATCH FOR SEARCH
                  this.productList = [];
                  this.noMatchData = true;
                  this.showContent = true;
                }
              })
          }
        });
    }
  }

  productDetail(key) {
    this.router.navigate([`/report-product-admin-detail/${key}`]);
  }

}
