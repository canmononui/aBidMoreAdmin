import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// FIREBASE
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-buyyer-list',
  templateUrl: './chat-buyyer-list.component.html',
  styleUrls: ['./chat-buyyer-list.component.css']
})
export class ChatBuyyerListComponent implements OnInit {

  public showContent = false;
  public chatListNonRead: any = []
  public chatListReaded: any = []
  public showChatList = true;
  public chatSearchNonRead: any = [];
  public chatSearchReaded: any = [];
  public showNoChatList = false;

  constructor(
    public path: LinkPathService,
    public router: Router,
    private route: ActivatedRoute,
    public auth: AuthService,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.path.setPath('chatBuyyer');
    // console.log(this.auth.currentUserId)
    var adminUID: any = this.auth.currentUserId
    // GET CHAT NON READ
    this.firestore.collection('chat', ref => ref
      .where(`readed.${adminUID}`, '==', false)
    ).snapshotChanges()
      .map(actions => {
        return actions.map(action => ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
      }).subscribe(chat => {
        this.chatListNonRead = [];
        var nonReadList: any = chat;
        // SET STATUS
        for (var i = 0; i < nonReadList.length; i++) {
          var _members:any = Object.keys(nonReadList[i].value.members);
          if (_members[0] != adminUID && nonReadList[i].value.members[_members[0]].type == 'buyer') {
            if (nonReadList[i].value.members[_members[0]].displayName == null) {
              nonReadList[i].value.members[_members[0]].displayName = 'ห้องสนทนา'
            }
            if (nonReadList[i].value.members[_members[0]].profileImg.imgUrl == null) {
              nonReadList[i].value.members[_members[0]].profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
            }
            nonReadList[i].value.chatTo = {
              displayName: nonReadList[i].value.members[_members[0]].displayName,
              imgUrl: nonReadList[i].value.members[_members[0]].profileImg.imgUrl
            }
            nonReadList[i].uid = nonReadList[i].value.members[_members[0]].uid,
            nonReadList[i].displayName = nonReadList[i].value.members[_members[0]].displayName;
            this.chatListNonRead.push(nonReadList[i])
          }
          else {
            if (nonReadList[i].value.members[_members[1]].type == 'buyer') {
              if (nonReadList[i].value.members[_members[1]].displayName == null) {
                nonReadList[i].value.members[_members[1]].displayName = 'ห้องสนทนา'
              }
              if (nonReadList[i].value.members[_members[1]].profileImg.imgUrl == null) {
                nonReadList[i].value.members[_members[1]].profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
              }
              nonReadList[i].value.chatTo = {
                displayName: nonReadList[i].value.members[_members[1]].displayName,
                imgUrl: nonReadList[i].value.members[_members[1]].profileImg.imgUrl
              }
              nonReadList[i].uid = nonReadList[i].value.members[_members[1]].uid,
              nonReadList[i].displayName = nonReadList[i].value.members[_members[1]].displayName;
              this.chatListNonRead.push(nonReadList[i])
            }
          }
        }
      })
      // GET CHAT READDED
      this.firestore.collection('chat', ref => ref
      .where(`readed.${adminUID}`, '==', true)
      ).snapshotChanges()
        .map(actions => {
          return actions.map(action => ({ key: action.payload.doc.id, value: action.payload.doc.data() }));
        }).subscribe(chat => {
          this.chatListReaded = [];
          var readedList: any = chat;
          // SET STATUS
          for (var i = 0; i < readedList.length; i++) {
            var _members:any = Object.keys(readedList[i].value.members);
            if (_members[0] != adminUID && readedList[i].value.members[_members[0]].type == 'buyer') {
              if (readedList[i].value.members[_members[0]].displayName == null) {
                readedList[i].value.members[_members[0]].displayName = 'ห้องสนทนา'
              }
              if (readedList[i].value.members[_members[0]].profileImg.imgUrl == null) {
                readedList[i].value.members[_members[0]].profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
              }
              readedList[i].value.chatTo = {
                displayName: readedList[i].value.members[_members[0]].displayName,
                imgUrl: readedList[i].value.members[_members[0]].profileImg.imgUrl
              }
              readedList[i].uid = readedList[i].value.members[_members[0]].uid,
              readedList[i].displayName = readedList[i].value.members[_members[0]].displayName;
              this.chatListReaded.push(readedList[i])
            }
            else {
              if (readedList[i].value.members[_members[1]].type == 'buyer') {
                if (readedList[i].value.members[_members[1]].displayName == null) {
                  readedList[i].value.members[_members[1]].displayName = 'ห้องสนทนา'
                }
                if (readedList[i].value.members[_members[1]].profileImg.imgUrl == null) {
                  readedList[i].value.members[_members[1]].profileImg.imgUrl = './assets/img/profile-icon-BG.svg'
                }
                readedList[i].value.chatTo = {
                  displayName: readedList[i].value.members[_members[1]].displayName,
                  imgUrl: readedList[i].value.members[_members[1]].profileImg.imgUrl
                }
                readedList[i].uid = readedList[i].value.members[_members[1]].uid,
                readedList[i].displayName = readedList[i].value.members[_members[1]].displayName;
                this.chatListReaded.push(readedList[i])
              }
            }
          }
        })
  }

  sortFunc (a, b) {
    return b.value.updateAt.seconds - a.value.updateAt.seconds
  }

  searchChat($event) {
    var shopNameInput = $event.target.value
    // console.log('shopNameInput -> ', shopNameInput)
    // INPUT SEARCH SHOP NAME
    if (shopNameInput != '') {
      // FILTER SHOP NAME IN NON READ LIST
      var nonRead = this.filterNonRead(shopNameInput);
      if (nonRead.length != 0) {
        this.chatSearchNonRead = nonRead;
        this.showChatList = false;
        this.showNoChatList = false;
      }
      else {
        this.chatSearchNonRead = [];
      }
      // FILTER SHOP NAME IN READES LIST
      var readed = this.filterReaded(shopNameInput);
      if (readed.length != 0) {
        this.chatSearchReaded = readed;
        this.showChatList = false;
        this.showNoChatList = false;
      }
      else {
        this.chatSearchReaded = [];
      }
      // CHAT SEARCH LIST == NULL (2 TYPE)
      if (this.chatSearchNonRead.length == 0 && this.chatSearchReaded.length == 0) {
        this.showChatList = false;
        this.showNoChatList = true;
      }
    }
    else {
      // SHOW CHAT LIST
      this.showChatList = true;
      this.showNoChatList = false;
      this.chatSearchNonRead = [];
      this.chatSearchReaded = [];
    }
  }

  filterNonRead(shopNameInput) {
    // console.log(shopNameInput)
    // console.log(this.chatListNonRead)
    return this.chatListNonRead.filter(object => {
      return object['displayName'].includes(shopNameInput)
    });
  }

  filterReaded(shopNameInput) {
    // console.log(shopNameInput)
    // console.log(this.chatListNonRead)
    return this.chatListReaded.filter(object => {
      return object['displayName'].includes(shopNameInput)
    });
  }

  gotoChatRoom(chatKey, chatToUID, displayName) {
    this.router.navigate([`/chat-buyyer-message/${chatKey}&${chatToUID}&${displayName}`]);
  }


}
