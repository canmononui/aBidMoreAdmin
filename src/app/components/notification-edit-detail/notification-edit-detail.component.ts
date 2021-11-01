import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// Text Editor
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-notification-edit-detail',
  templateUrl: './notification-edit-detail.component.html',
  styleUrls: ['./notification-edit-detail.component.css']
})
export class NotificationEditDetailComponent implements OnInit {

  // Text Editor
  public value: string = `<p>รายละเอียด</p>`;
  public tools: object = {
    items: ['Undo', 'Redo', '|',
      'Bold', 'Italic', '|',
      'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|',
      'FullScreen']
  };
  public quickTools: object = {
    image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
  };
  
  public oneTimeForm = true;
  public repeatForm = false;

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('notification');
  }

  notiTime(type) {
    if(type == 'oneTime'){
      this.oneTimeForm = true;
      this.repeatForm = false;
    }
    else {
      this.oneTimeForm = false;
      this.repeatForm = true;
    }
  }

}
