import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-settime',
  templateUrl: './member-settime.component.html',
  styleUrls: ['./member-settime.component.css']
})
export class MemberSettimeComponent implements OnInit {

  public focusEdit = false

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('member');
  }

  buttonEdit(){
    this.focusEdit = true
  }

  buttonSave(){
    this.focusEdit = false
  }
}
