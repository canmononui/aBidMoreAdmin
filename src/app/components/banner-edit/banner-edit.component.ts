import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// Datepicker
import { NgbDate, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.css']
})
export class BannerEditComponent implements OnInit {

  public settingForm = true
  public concludeForm = false
  public placeholderBannerType = 'กรุณาเลือกรูปแบบ'
  public placeholderPage = 'กรุณาเลือกหน้า'
  public placeholderPosition = 'กรุณาเลือกตำแหน่ง'
  // Datepicker
  hoveredDate: NgbDate | null = null;
  // fromDate: NgbDate | null;
  // toDate: NgbDate | null;
  fromDate: any;
  toDate: any;
  dateString: string;
  public date: any = [];

  constructor(
    public path: LinkPathService,
    public router: Router,
  ) { 
    this.fromDate = {
      day: 5,
      month: 2,
      year: 2021
    };
    this.toDate = {
      day: 5,
      month: 2,
      year: 2021
    };
    this.dateString = '-';
  }

  ngOnInit(): void {
    this.path.setPath('banner');
  }

  selectBannerType(type) {
    this.placeholderBannerType = type
  }

  selectPage(type) {
    this.placeholderPage = type
  }

  selectPosition(type) {
    this.placeholderPosition = type
  }

  buttonBack() {
    this.settingForm = true
    this.concludeForm = false
  }

  buttonNext() {
    this.settingForm = false
    this.concludeForm = true
  }


  // Datepicker
  onDateSelection(date: NgbDate) {
    // console.log(date);
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } 
    else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      // this.dateString = this.fromDate.year+'/'+this.fromDate.month+'/'+this.fromDate.day+' - '+this.toDate.year+'/'+this.toDate.month+'/'+this.toDate.day;
      this.dateString = this.fromDate.day+'/'+this.fromDate.month+'/'+this.fromDate.year+' - '+this.toDate.day+'/'+this.toDate.month+'/'+this.toDate.year;

      // this.getDataFromFirebase()
      this.date = ({
        fromDate: {
          year: this.fromDate.year,
          month: this.fromDate.month,
          day: this.fromDate.day
        },
        toDate: {
          year: this.toDate.year,
          month: this.toDate.month,
          day: this.toDate.day
        },
      });
      // this.getDataFromFirebase();
    } 
    else {
      this.toDate = null
      this.fromDate = date;
      this.dateString = this.fromDate.day+'/'+this.fromDate.month+'/'+this.fromDate.year+' - '+this.fromDate.day+'/'+this.fromDate.month+'/'+this.fromDate.year;
      this.date = ({
        fromDate: {
          year: this.fromDate.year,
          month: this.fromDate.month,
          day: this.fromDate.day
        },
        toDate: {
          year: this.fromDate.year,
          month: this.fromDate.month,
          day: this.fromDate.day
        },
      });
      // this.getDataFromFirebase();
    }
  }

  monthName(monthNumber) {
    //1 = January
    var monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
     'July', 'August', 'September', 'October', 'November', 'December' ];
    return monthNames[monthNumber - 1];
   }


  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}
