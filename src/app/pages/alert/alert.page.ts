import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title: string;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel button');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Boton Ok', blah);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentInput() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input',
      subHeader: 'Ingrese su nombre:',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel button');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Boton Ok', data);
            this.title = data.txtName
          }
        }
      ],
      inputs:[
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Name'
        }
      ]
    });

    await alert.present();
  }

}
