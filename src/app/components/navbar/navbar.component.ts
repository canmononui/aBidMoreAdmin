import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LinkPathService } from '../../services/link-path.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router:Router,
    public path: LinkPathService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.signOut()
  }

}
