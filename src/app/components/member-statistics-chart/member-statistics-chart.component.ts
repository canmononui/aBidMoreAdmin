import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';
import { Router } from '@angular/router';
// Datepicker
import { NgbDate, NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// Chart
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-member-statistics-chart',
  templateUrl: './member-statistics-chart.component.html',
  styleUrls: ['./member-statistics-chart.component.css']
})
export class MemberStatisticsChartComponent implements OnInit {

  // Datepicker
  hoveredDate: NgbDate | null = null;
  // fromDate: NgbDate | null;
  // toDate: NgbDate | null;
  fromDate: any;
  toDate: any;
  dateString: string;
  public date: any = [];
  // Chart
  sexBarChart: any = [];
  ageBarChart: any = [];
  timeBarChart: any = [];

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
    this.path.setPath('member');

    // SET COLOR AND SHOW VALUE DATA OF CHART
    Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
      color: '#000'
    });

    // sexBarChart
    this.sexBarChart = new Chart('sexBarChart', { // object name = id html
      type: 'horizontalBar', 
      data: {
        labels: ["เพศชาย","เพศหญิง"],
        datasets: [{
          data: [9,3],
          borderWidth: 1,
          backgroundColor: ['#1abc9c', '#3498db'],
          plugin:[ChartDataLabels]
        }],
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            barPercentage: 0.5,
            categoryPercentage: 1,
          }]
        },
        legend: {
          display: false
        },
        title: {
          text: "เพศของผู้รับชมร้านค้า",
          display: true
        },
      }
    })

    // ageBarChart
    this.ageBarChart = new Chart('ageBarChart', { // object name = id html
      type: 'bar', 
      data: {
          labels: ["ต่ำกว่า 13 ปี","13-17 ปี","18-24 ปี","25-34 ปี","35-44 ปี","45-54 ปี","55-64 ปี","65+ ปี"],
          datasets: [{
            data: [3,8,9,13,14,19,10,5],
            borderWidth: 1,
            backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12', '#F56666', '#F2CE17', '#555757'],
            plugin:[ChartDataLabels]
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            barPercentage: 0.5,
            categoryPercentage: 1
          }]
        },
        legend: {
          display: false
        },
        title: {
          text: "ช่วงอายุของผู้รับชมร้านค้า",
          display: true
        },
      }
    })
  
    // timeBarChart
    this.timeBarChart = new Chart('timeBarChart', { // object name = id html
      type: 'bar', 
      data: {
          labels: ["00:01-03.00","03:01-06:00","06:01-09:00","09:01-12:00","12:01-15:00","15:01-18:00","18:01-21:00","21:01-00:00"],
          datasets: [{
            data: [3,5,7,13,15,19,10,15],
            borderWidth: 1,
            backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#bdc3c7', '#f39c12', '#F56666', '#F2CE17', '#555757'],
            plugin:[ChartDataLabels]
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          xAxes: [{
            barPercentage: 0.5,
            categoryPercentage: 1
          }]
        },
        legend: {
          display: false
        },
        title: {
          text: "ช่วงเวลาการเข้าชมร้าน",
          display: true
        }
      }
    })


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
