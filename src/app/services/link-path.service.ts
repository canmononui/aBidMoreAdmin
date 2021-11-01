import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkPathService {

  public path : string = '';
  public sellerPath = false;
  public buyyerPath = false;
  public chatSellerPath = false;
  public chatBuyyerPath = false;
  public reportProductPath = false;
  public returnProductPath = false;
  public donatePath = false;
  public conditionSellerPath = false;
  public conditionBuyyerPath = false;
  public notificationPath = false;
  public bannerPath = false;
  public memberPath = false;
  public percentagePath = false;
  public adminPath = false;
  public vdoPath = false;

  constructor() { }

  setPath(_path: string) {
    if(_path == 'seller'){
      this.sellerPath = true;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'seller';
    }
    else if(_path == 'buyyer'){
      this.sellerPath = false;
      this.buyyerPath = true;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'buyyer';
    }
    else if(_path == 'chatSeller'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = true;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'chatSeller';
    }
    else if(_path == 'chatBuyyer'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = true;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'chatBuyyer';
    }
    else if(_path == 'reportProduct'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = true;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'reportProduct';
    }
    else if(_path == 'returnProduct'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = true;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'returnProduct';
    }
    else if(_path == 'donate'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = true;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'donate';
    }
    else if(_path == 'conditionSeller'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = true;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'conditionSeller';
    }
    else if(_path == 'conditionBuyyer'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = true;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'conditionBuyyer';
    }
    else if(_path == 'notification'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = true;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'notification';
    }
    else if(_path == 'banner'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = true;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'banner';
    }
    else if(_path == 'member'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = true;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'member';
    }
    else if(_path == 'percentage'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = true;
      this.adminPath = false;
      this.vdoPath = false
      this.path = 'percentage';
    }
    else if(_path == 'admin'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = true;
      this.vdoPath = false
      this.path = 'admin';
    }
    else if(_path == 'vdo'){
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = true
      this.path = 'vdo';
    }
    else {
      this.sellerPath = false;
      this.buyyerPath = false;
      this.chatSellerPath = false;
      this.chatBuyyerPath = false;
      this.reportProductPath = false;
      this.returnProductPath = false;
      this.donatePath = false;
      this.conditionSellerPath = false;
      this.conditionBuyyerPath = false;
      this.notificationPath = false;
      this.bannerPath = false;
      this.memberPath = false;
      this.percentagePath = false;
      this.adminPath = false;
      this.vdoPath = false
      this.path = '';
    }

  }
}
