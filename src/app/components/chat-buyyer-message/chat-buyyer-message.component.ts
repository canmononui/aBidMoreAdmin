import { AfterViewChecked, ElementRef, ViewChild, Component, OnInit, OnDestroy } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-buyyer-message',
  templateUrl: './chat-buyyer-message.component.html',
  styleUrls: ['./chat-buyyer-message.component.css']
})
export class ChatBuyyerMessageComponent implements OnInit {

  public id;
  public messagesList: any = [];
  public showNoMes = false;
  public chatDocKey: string;
  public displayName: string;
  public messageInputValue = '';
  public chatToUID: any;
  public profileChat: string = './assets/img/chat/WebsiteLogo-hourglass-B-Edit2_MoreBubble_shadow.png';
  public subscriptionMess:any = null;
  @ViewChild('mesDes') private mesDes: ElementRef;

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.path.setPath('chatBuyyer');
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      var splitID = this.id.split("&", 3);
      this.chatDocKey = splitID[0];
      this.chatToUID = splitID[1]
      this.displayName = splitID[2];
      // console.log('chatDocKey ->', this.chatDocKey)
      // console.log('chatToUID ->', this.chatToUID)
      // console.log('displayName ->', this.displayName)
      // console.log(this.chatDocKey, this.chatToUID, this.displayName)
      // if (this.chatDocKey != 'null') {
      // GET MESSAGES
      this.subscriptionMess = this.firestore.collection('chat').doc(this.chatDocKey).collection('messages', ref => ref
        .orderBy('createAt')
      ).snapshotChanges()
        .map(actions => {
          return actions.map(action => ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
        }).subscribe(chat => {
          // console.log('CHAT NON READ -> ', chat)
          // if (chat.length != 0) {
          this.firestore.collection('chat').doc(this.chatDocKey).get().toPromise()
            .then((doc) => {
              var _doc: any = doc.data()
              // CHECK CHAT TO UID PROFILE NOT NULL 
              if(_doc.members[`${this.chatToUID}`].profileImg.imgUrl != null){
                this.profileChat = _doc.members[`${this.chatToUID}`].profileImg.imgUrl;
              }
              // SET READED STATUS [BOOLEAN]
              if (_doc.readed[`${this.auth.currentUserId}`] == false) {
                _doc.readed[`${this.auth.currentUserId}`] = true
                this.firestore.collection('chat').doc(this.chatDocKey).update({
                  readed: _doc.readed
                })
                  .then((doc) => {
                    this.messagesList = chat;
                    // console.log(this.messagesList)
                    this.showNoMes = false;
                  })
              }
              else {
                this.messagesList = chat;
                // console.log(this.messagesList)
                this.showNoMes = false;
              }
            })
        })
    }
    else {
      this.router.navigate(['/chat-buyyer-list'])
    }
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
    // var objDiv = document.getElementById("mesDes");
    try {
      this.mesDes.nativeElement.scrollTop = this.mesDes.nativeElement.scrollHeight;
    } catch(err) { }                 
  }   

  ngOnDestroy() {
    if(this.subscriptionMess != null){
      this.subscriptionMess.unsubscribe();
    }
  }
  
  sendMessage(messageInput) {
    // console.log(messageInput)
    if (messageInput != '') {
      this.messageInputValue = '';
      // GET CHAT DOC DATA
      this.firestore.collection('chat').doc(this.chatDocKey).get().toPromise()
      .then((doc) => {
        var _doc: any = doc.data()
        // SET READED STATUS [BOOLEAN]
        _doc.readed[`${this.chatToUID}`] = false
        _doc.readed[`${this.auth.currentUserId}`] = true
        // console.log(_doc.readed)
        // ADD MESSAGE TO SUBCOLLECTION "MESSAGES"
        this.firestore.collection('chat').doc(this.chatDocKey).collection('messages').add({
          createAt: firebase.firestore.Timestamp.now(),
          text: messageInput,
          uid: this.auth.currentUserId
        })
          .then((doc) => {
            this.firestore.collection('chat').doc(this.chatDocKey).update({
              readed: _doc.readed
            })
          })
      })
    }
  }

  gotoChatList(){
    this.router.navigate([`chat-buyyer-list`])
  }

}
