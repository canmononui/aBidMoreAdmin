import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// FIREBASE
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-return-product-sendback-wrong-list',
  templateUrl: './return-product-sendback-wrong-list.component.html',
  styleUrls: ['./return-product-sendback-wrong-list.component.css']
})
export class ReturnProductSendbackWrongListComponent implements OnInit {

  public argueReceiveList:any = [];
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
    .where('returnProduct.status', '==','sellerArgueReceive'))
    .get().toPromise()
    .then((argueReceive) => {
      if(argueReceive.size != 0){
        argueReceive.forEach((doc) => {
          this.argueReceiveList.push({
            key: doc.id,
            value: doc.data()
          })
        })
        this.showContent = true;
      }
      else{
        this.argueReceiveList = [];
        this.showContent = true;
      }
    })
  }

  gotoArgueReceiveDes(orderKey){
    this.router.navigate([`/return-product-sendback-wrong-detail/${orderKey}`]);
  }

}
