import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-buyyer-message',
  templateUrl: './chat-buyyer-message.component.html',
  styleUrls: ['./chat-buyyer-message.component.css']
})
export class ChatBuyyerMessageComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('chatBuyyer');
  }

}
