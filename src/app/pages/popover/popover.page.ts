import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  mostrarPop = async (event) => {
    const popover = await this.popoverController.create({
      component: PopinfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();
    // const {data} = await popover.onDidDismiss();
    const {data} = await popover.onWillDismiss();
    console.log('respuesta', data);
  }

}
