import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from './../environments/firebase.config';
// FIRE BASE AUTH
import { AngularFireAuthModule } from '@angular/fire/auth';
// FIREBASE 
import { AngularFireModule } from '@angular/fire';
// FIREBASE FIRESTORE
import { AngularFirestoreModule } from '@angular/fire/firestore';
// FIREBASE STORAGE
import { AngularFireStorageModule } from '@angular/fire/storage';
// IMAGE CROPPER
// import { ImageCropperModule } from 'ngx-image-cropper';
// TEXT EDITOR
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// SERVICE
import { AuthService } from './services/auth.service';
// GUARD
import { AuthGuard } from './guards/auth.guard';
// COMPONANT
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModalComponent } from './components/sidebar-modal/sidebar-modal.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninStatusWaitingComponent } from './components/signin-status-waiting/signin-status-waiting.component';
import { SellerAccountApproveListComponent } from './components/seller-account-approve-list/seller-account-approve-list.component';
import { SellerAccountApproveDetailComponent } from './components/seller-account-approve-detail/seller-account-approve-detail.component';
import { SellerBankApproveListComponent } from './components/seller-bank-approve-list/seller-bank-approve-list.component';
import { SellerBankApproveDetailComponent } from './components/seller-bank-approve-detail/seller-bank-approve-detail.component';
import { SellerSearchListComponent } from './components/seller-search-list/seller-search-list.component';
import { SellerSearchDetailComponent } from './components/seller-search-detail/seller-search-detail.component';
import { SellerReportListComponent } from './components/seller-report-list/seller-report-list.component';
import { SellerReportDetailComponent } from './components/seller-report-detail/seller-report-detail.component';
import { SellerAbidmoreGobalComponent } from './components/seller-abidmore-gobal/seller-abidmore-gobal.component';
import { BuyyerAccountListComponent } from './components/buyyer-account-list/buyyer-account-list.component';
import { BuyyerAccountDetailComponent } from './components/buyyer-account-detail/buyyer-account-detail.component';
import { ChatBuyyerListComponent } from './components/chat-buyyer-list/chat-buyyer-list.component';
import { ChatBuyyerMessageComponent } from './components/chat-buyyer-message/chat-buyyer-message.component';
import { ChatSellerListComponent } from './components/chat-seller-list/chat-seller-list.component';
import { ChatSellerMessageComponent } from './components/chat-seller-message/chat-seller-message.component';
import { ReportProductListComponent } from './components/report-product-list/report-product-list.component';
import { ReportProductDetailComponent } from './components/report-product-detail/report-product-detail.component';
import { ReportProductHistoryListComponent } from './components/report-product-history-list/report-product-history-list.component';
import { ReportProductHistoryDetailComponent } from './components/report-product-history-detail/report-product-history-detail.component';
import { DonateListComponent } from './components/donate-list/donate-list.component';
import { ConditionSellerListComponent } from './components/condition-seller-list/condition-seller-list.component';
import { ConditionSellerDetailComponent } from './components/condition-seller-detail/condition-seller-detail.component';
import { ConditionSellerAddComponent } from './components/condition-seller-add/condition-seller-add.component';
import { ConditionBuyyerListComponent } from './components/condition-buyyer-list/condition-buyyer-list.component';
import { ConditionBuyyerDetailComponent } from './components/condition-buyyer-detail/condition-buyyer-detail.component';
import { ConditionBuyyerAddComponent } from './components/condition-buyyer-add/condition-buyyer-add.component';
import { NotificationAddComponent } from './components/notification-add/notification-add.component';
import { NotificationEditListComponent } from './components/notification-edit-list/notification-edit-list.component';
import { NotificationEditDetailComponent } from './components/notification-edit-detail/notification-edit-detail.component';
import { NotificationHistoryListComponent } from './components/notification-history-list/notification-history-list.component';
import { NotificationHistoryDetailComponent } from './components/notification-history-detail/notification-history-detail.component';
import { BannerOnlineListComponent } from './components/banner-online-list/banner-online-list.component';
import { BannerOnlineDetailComponent } from './components/banner-online-detail/banner-online-detail.component';
import { BannerCalendarComponent } from './components/banner-calendar/banner-calendar.component';
import { BannerSettingComponent } from './components/banner-setting/banner-setting.component';
import { BannerEditComponent } from './components/banner-edit/banner-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberStatisticsChartComponent } from './components/member-statistics-chart/member-statistics-chart.component';
import { MemberSettimeComponent } from './components/member-settime/member-settime.component';
import { PercentageShopComponent } from './components/percentage-shop/percentage-shop.component';
import { PercentageCancelOrderComponent } from './components/percentage-cancel-order/percentage-cancel-order.component';
import { PercentageDepositSellerSupportBuyProductComponent } from './components/percentage-deposit-seller-support-buy-product/percentage-deposit-seller-support-buy-product.component';
import { VdoAddComponent } from './components/vdo-add/vdo-add.component';
import { VdoOnlineListComponent } from './components/vdo-online-list/vdo-online-list.component';
import { VdoOnlineDetailComponent } from './components/vdo-online-detail/vdo-online-detail.component';
import { VdoHistoryListComponent } from './components/vdo-history-list/vdo-history-list.component';
import { VdoHistoryDetailComponent } from './components/vdo-history-detail/vdo-history-detail.component';
import { AdminProfileSettingComponent } from './components/admin-profile-setting/admin-profile-setting.component';
import { AdminCreateAccountAdminComponent } from './components/admin-create-account-admin/admin-create-account-admin.component';
import { AdminAccountAdminListComponent } from './components/admin-account-admin-list/admin-account-admin-list.component';
import { AdminAccountAdminDetailComponent } from './components/admin-account-admin-detail/admin-account-admin-detail.component';
import { AdminApproveAccountAccessComponent } from './components/admin-approve-account-access/admin-approve-account-access.component';
import { AdminForgotPasswordComponent } from './components/admin-forgot-password/admin-forgot-password.component';
import { AdminMoneySettingComponent } from './components/admin-money-setting/admin-money-setting.component';
import { ReturnProductListComponent } from './components/return-product-list/return-product-list.component';
import { ReturnProductDetailComponent } from './components/return-product-detail/return-product-detail.component';
import { ReturnProductSendbackWrongListComponent } from './components/return-product-sendback-wrong-list/return-product-sendback-wrong-list.component';
import { ReturnProductSendbackWrongDetailComponent } from './components/return-product-sendback-wrong-detail/return-product-sendback-wrong-detail.component';
import { ReturnProductRespondMoreSevenDaysListComponent } from './components/return-product-respond-more-seven-days-list/return-product-respond-more-seven-days-list.component';
import { ReturnProductRespondMoreSevenDaysDetailComponent } from './components/return-product-respond-more-seven-days-detail/return-product-respond-more-seven-days-detail.component';
import { ReportProductAdminListComponent } from './components/report-product-admin-list/report-product-admin-list.component';
import { ReportProductAdminDetailComponent } from './components/report-product-admin-detail/report-product-admin-detail.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

// ROUTES
export const router: Routes = [
{ path: '', component: SigninComponent, },
{ path: 'signin', component: SigninComponent, },
{ path: 'signin-status-waiting/:id', component: SigninStatusWaitingComponent, },
{ path: 'seller-account-approve-list', component: SellerAccountApproveListComponent, canActivate: [AuthGuard] },
{ path: 'seller-account-approve-detail/:id', component: SellerAccountApproveDetailComponent, canActivate: [AuthGuard] },
{ path: 'seller-bank-approve-list', component: SellerBankApproveListComponent, canActivate: [AuthGuard] },
{ path: 'seller-bank-approve-detail', component: SellerBankApproveDetailComponent, canActivate: [AuthGuard] },
{ path: 'seller-search-list', component: SellerSearchListComponent, canActivate: [AuthGuard] },
{ path: 'seller-search-detail/:id', component: SellerSearchDetailComponent, canActivate: [AuthGuard] },
{ path: 'seller-report-list', component: SellerReportListComponent, canActivate: [AuthGuard] },
{ path: 'seller-report-detail/:id', component: SellerReportDetailComponent, canActivate: [AuthGuard] },
{ path: 'seller-abidmore-gobal', component: SellerAbidmoreGobalComponent, canActivate: [AuthGuard] },
{ path: 'buyyer-account-list', component: BuyyerAccountListComponent, canActivate: [AuthGuard] },
{ path: 'buyyer-account-detail/:id', component: BuyyerAccountDetailComponent, canActivate: [AuthGuard] },
{ path: 'chat-seller-list', component: ChatSellerListComponent, canActivate: [AuthGuard] },
{ path: 'chat-seller-message', component: ChatSellerMessageComponent, canActivate: [AuthGuard] },
{ path: 'chat-seller-message/:id', component: ChatSellerMessageComponent, canActivate: [AuthGuard] },
{ path: 'chat-buyyer-list', component: ChatBuyyerListComponent, canActivate: [AuthGuard] },
{ path: 'chat-buyyer-message', component: ChatBuyyerMessageComponent, canActivate: [AuthGuard] },
{ path: 'chat-buyyer-message/:id', component: ChatBuyyerMessageComponent, canActivate: [AuthGuard] },
{ path: 'report-product-list', component: ReportProductListComponent, canActivate: [AuthGuard] },
{ path: 'report-product-detail/:id', component: ReportProductDetailComponent, canActivate: [AuthGuard] },
{ path: 'report-product-history-list', component: ReportProductHistoryListComponent, canActivate: [AuthGuard] },
{ path: 'report-product-history-detail/:id', component: ReportProductHistoryDetailComponent, canActivate: [AuthGuard] },
{ path: 'donate-list', component: DonateListComponent, canActivate: [AuthGuard] },
{ path: 'condition-seller-list', component: ConditionSellerListComponent, canActivate: [AuthGuard] },
{ path: 'condition-seller-detail', component: ConditionSellerDetailComponent, canActivate: [AuthGuard] },
{ path: 'condition-seller-add', component: ConditionSellerAddComponent, canActivate: [AuthGuard] },
{ path: 'condition-buyyer-list', component: ConditionBuyyerListComponent, canActivate: [AuthGuard] },
{ path: 'condition-buyyer-detail', component: ConditionBuyyerDetailComponent, canActivate: [AuthGuard] },
{ path: 'condition-buyyer-add', component: ConditionBuyyerAddComponent, canActivate: [AuthGuard] },
{ path: 'notification-add', component: NotificationAddComponent, canActivate: [AuthGuard] },
{ path: 'notification-edit-list', component: NotificationEditListComponent, canActivate: [AuthGuard] },
{ path: 'notification-edit-detail', component: NotificationEditDetailComponent, canActivate: [AuthGuard] },
{ path: 'notification-history-list', component: NotificationHistoryListComponent, canActivate: [AuthGuard] },
{ path: 'notification-history-detail', component: NotificationHistoryDetailComponent, canActivate: [AuthGuard] },
{ path: 'banner-online-list', component: BannerOnlineListComponent, canActivate: [AuthGuard] },
{ path: 'banner-online-detail', component: BannerOnlineDetailComponent, canActivate: [AuthGuard] },
{ path: 'banner-calendar', component: BannerCalendarComponent, canActivate: [AuthGuard] },
{ path: 'banner-setting', component: BannerSettingComponent, canActivate: [AuthGuard] },
{ path: 'banner-edit', component: BannerEditComponent, canActivate: [AuthGuard] },
{ path: 'member-statistics-chart', component: MemberStatisticsChartComponent, canActivate: [AuthGuard] },
{ path: 'member-settime', component: MemberSettimeComponent, canActivate: [AuthGuard] },
{ path: 'percentage-shop', component: PercentageShopComponent, canActivate: [AuthGuard] },
{ path: 'percentage-cancel-order', component: PercentageCancelOrderComponent, canActivate: [AuthGuard] },
{ path: 'percentage-deposit-seller-support-buy-product', component: PercentageDepositSellerSupportBuyProductComponent, canActivate: [AuthGuard] },
{ path: 'vdo-add', component: VdoAddComponent, canActivate: [AuthGuard] },
{ path: 'vdo-online-list', component: VdoOnlineListComponent, canActivate: [AuthGuard] },
{ path: 'vdo-online-detail', component: VdoOnlineDetailComponent, canActivate: [AuthGuard] },
{ path: 'vdo-history-list', component: VdoHistoryListComponent, canActivate: [AuthGuard] },
{ path: 'vdo-history-detail', component: VdoHistoryDetailComponent, canActivate: [AuthGuard] },
{ path: 'admin-profile-setting', component: AdminProfileSettingComponent, canActivate: [AuthGuard] },
{ path: 'admin-create-account-admin', component: AdminCreateAccountAdminComponent, canActivate: [AuthGuard] },
{ path: 'admin-account-admin-list', component: AdminAccountAdminListComponent, canActivate: [AuthGuard] },
{ path: 'admin-account-admin-detail', component: AdminAccountAdminDetailComponent, canActivate: [AuthGuard] },
{ path: 'admin-approve-account-access', component: AdminApproveAccountAccessComponent, canActivate: [AuthGuard] },
{ path: 'admin-forgot-password', component: AdminForgotPasswordComponent, canActivate: [AuthGuard] },
{ path: 'admin-money-setting', component: AdminMoneySettingComponent, canActivate: [AuthGuard] },
{ path: 'return-product-list', component: ReturnProductListComponent, canActivate: [AuthGuard] },
{ path: 'return-product-detail/:id', component: ReturnProductDetailComponent, canActivate: [AuthGuard] },
{ path: 'return-product-sendback-wrong-list', component: ReturnProductSendbackWrongListComponent, canActivate: [AuthGuard] },
{ path: 'return-product-sendback-wrong-detail/:id', component: ReturnProductSendbackWrongDetailComponent, canActivate: [AuthGuard] },
{ path: 'return-product-respond-more-seven-days-list', component: ReturnProductRespondMoreSevenDaysListComponent, canActivate: [AuthGuard] },
{ path: 'return-product-respond-more-seven-days-detail', component: ReturnProductRespondMoreSevenDaysDetailComponent, canActivate: [AuthGuard] },
{ path: 'report-product-admin-list', component: ReportProductAdminListComponent, canActivate: [AuthGuard] },
{ path: 'report-product-admin-detail/:id', component: ReportProductAdminDetailComponent, canActivate: [AuthGuard] },
{ path: 'order-list', component: OrderListComponent, canActivate: [AuthGuard] },
{ path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [AuthGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarModalComponent,
    SigninComponent,
    SigninStatusWaitingComponent,
    SellerAccountApproveListComponent,
    SellerAccountApproveDetailComponent,
    SellerBankApproveListComponent,
    SellerBankApproveDetailComponent,
    SellerSearchListComponent,
    SellerSearchDetailComponent,
    SellerReportListComponent,
    SellerReportDetailComponent,
    SellerAbidmoreGobalComponent,
    BuyyerAccountListComponent,
    BuyyerAccountDetailComponent,
    ChatBuyyerListComponent,
    ChatBuyyerMessageComponent,
    ChatSellerListComponent,
    ChatSellerMessageComponent,
    ReportProductListComponent,
    ReportProductDetailComponent,
    ReportProductHistoryListComponent,
    ReportProductHistoryDetailComponent,
    DonateListComponent,
    ConditionSellerListComponent,
    ConditionSellerDetailComponent,
    ConditionSellerAddComponent,
    ConditionBuyyerListComponent,
    ConditionBuyyerDetailComponent,
    ConditionBuyyerAddComponent,
    NotificationAddComponent,
    NotificationEditListComponent,
    NotificationEditDetailComponent,
    NotificationHistoryListComponent,
    NotificationHistoryDetailComponent,
    BannerOnlineListComponent,
    BannerOnlineDetailComponent,
    BannerCalendarComponent,
    BannerSettingComponent,
    BannerEditComponent,
    MemberStatisticsChartComponent,
    MemberSettimeComponent,
    PercentageShopComponent,
    PercentageCancelOrderComponent,
    VdoAddComponent,
    VdoOnlineListComponent,
    VdoOnlineDetailComponent,
    VdoHistoryListComponent,
    VdoHistoryDetailComponent,
    AdminProfileSettingComponent,
    AdminCreateAccountAdminComponent,
    AdminAccountAdminListComponent,
    AdminAccountAdminDetailComponent,
    AdminApproveAccountAccessComponent,
    AdminForgotPasswordComponent,
    AdminMoneySettingComponent,
    ReturnProductListComponent,
    ReturnProductDetailComponent,
    ReturnProductSendbackWrongListComponent,
    ReturnProductSendbackWrongDetailComponent,
    ReturnProductRespondMoreSevenDaysListComponent,
    ReturnProductRespondMoreSevenDaysDetailComponent,
    ReportProductAdminListComponent,
    ReportProductAdminDetailComponent,
    PercentageDepositSellerSupportBuyProductComponent,
    OrderListComponent,
    OrderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RichTextEditorAllModule,
    NgbModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
