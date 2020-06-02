import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  data: Observable<any>;
  constructor(private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.data =  this.dataService.getUsers();
  }

  // async presentToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

  borrar(item) {
    //console.log('eliminando...', item);
    this.lista.closeSlidingItems();
    this.dataService.presentToast('Deleted Item from service');
  }

  favorite(item) {
    //console.log('favorite...', item);
    // this.presentToast('Added to favorites');
    this.dataService.presentToast('Added to favorites from service');
    this.lista.closeSlidingItems();
  }

  share(item) {
    //console.log('sharing...', item);
    // this.presentToast('Shared');
    this.dataService.presentToast('Shared favorites from service');
    this.lista.closeSlidingItems();
  }

}
