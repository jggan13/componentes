import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  data: Observable<any>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data =  this.dataService.getUsers();
  }

  borrar(item) {
    console.log('eliminando...', item);
    this.lista.closeSlidingItems();
  }

  favorite(item) {
    console.log('favorite...', item);
    this.lista.closeSlidingItems();
  }

  share(item) {
    console.log('sharing...', item);
    this.lista.closeSlidingItems();
  }

}
