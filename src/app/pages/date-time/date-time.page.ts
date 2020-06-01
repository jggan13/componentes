import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento : Date = new Date();
  customPickerOptions;
  customDate = new Date();
  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log('event', event);
          console.log(new Date(event.year.value, event.month.value, event.day.value));
          this.customDate = new Date(event.year.value, event.month.value, event.day.value);
          console.log('customDate',this.customDate);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };

  }

  cambioFecha = (event) => {
    console.log('ionChange',event);
    console.log('date',new Date(event.detail.value));
  }

}
