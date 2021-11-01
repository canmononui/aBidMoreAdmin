import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LinkPathService } from '../../services/link-path.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public showContent = true

  constructor(
    public router:Router,
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
  }

}
