import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, { static: true}) segment: IonSegment;

  superheroes: Observable<any>;
  publisher: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes = this.dataService.getHeroes();
  }

  segmentChanged = (event) => {
    const valorSegmento = event.detail.value;
    if(valorSegmento === 'todos'){
      this.publisher = '';
      //this.superheroes = this.dataService.getHeroes();
      return;
    }
    this.publisher = valorSegmento;
    console.log(valorSegmento);
  }

}
