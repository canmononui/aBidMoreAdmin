import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-return-product-list',
  templateUrl: './return-product-list.component.html',
  styleUrls: ['./return-product-list.component.css']
})
export class ReturnProductListComponent implements OnInit {

  public argueRequestList:any = [];
  public showContent = false;
  
  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    public storage: AngularFireStorage,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.path.setPath('returnProduct');
    this.firestore.collection('order' , ref => ref
    .where('returnProduct.status', '==','sellerArgueRequest'))
    .get().toPromise()
    .then((argueRequest) => {
      if(argueRequest.size != 0){
        argueRequest.forEach((doc) => {
          this.argueRequestList.push({
            key: doc.id,
            value: doc.data()
          })
        })
        this.showContent = true;
      }
      else{
        this.argueRequestList = [];
        this.showContent = true;
      }
    })
  }

  gotoArgueRequestDes(orderKey){
    this.router.navigate([`/return-product-detail/${orderKey}`]);
  }

}
