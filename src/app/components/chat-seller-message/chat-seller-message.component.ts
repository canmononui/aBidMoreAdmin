import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-seller-message',
  templateUrl: './chat-seller-message.component.html',
  styleUrls: ['./chat-seller-message.component.css']
})
export class ChatSellerMessageComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('chatSeller');
  }

}
