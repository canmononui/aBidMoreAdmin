import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// Text Editor
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-condition-seller-add',
  templateUrl: './condition-seller-add.component.html',
  styleUrls: ['./condition-seller-add.component.css']
})
export class ConditionSellerAddComponent implements OnInit {
  
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

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.path.setPath('conditionSeller');
  }

}
