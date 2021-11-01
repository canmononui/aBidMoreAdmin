import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vdo-add',
  templateUrl: './vdo-add.component.html',
  styleUrls: ['./vdo-add.component.css']
})
export class VdoAddComponent implements OnInit {
  
  public vdoSkipType = false
  
  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('vdo');
  }

  vdoSkip(type) {
    if(type == 'yes'){
      this.vdoSkipType = true
    }
    else {
      this.vdoSkipType = false
    }
  }

}
