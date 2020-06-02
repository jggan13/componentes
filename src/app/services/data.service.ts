import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private toastController: ToastController) { }

  getUsers = () => {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu = () => {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums = () => {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes = () => {
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(delay(5000));
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
