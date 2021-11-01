import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LinkPathService } from '../../services/link-path.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.css']
})
export class SidebarModalComponent implements OnInit {

  public showContent = true

  constructor(
    public router:Router,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
  }

}
