import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  constructor(private alertController: AlertController, private actionSheet: ActionSheetController) { }


  async prestamoAlert(){
    const alert = await this.alertController.create({
      header: 'Solicitud de servicio',
      subHeader: 'Solicitud de prestamo',
      message: 'Presione aceptar para que un agente se comunique con usted para comenzar el proceso de solicitud de prestamo.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelo la solicitud');     
        }
      }, 
      {
        text: 'Aceptar',
          cssClass: 'secondary',
        handler: () => {
          console.log('Second Handler');
        }
      }]
    } 
    );
    

    await alert.present();
  }
  async cuentaAlert(){
    const alert = await this.alertController.create({
      header: 'Solicitud de servicio',
      subHeader: 'Solicitud de estado de cuenta',
      message: 'Presione aceptar para que sea enviado su estado de cuenta a su correo electronico.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelo la solicitud');     
        }
      }, 
      {
        text: 'Aceptar',
          cssClass: 'secondary',
        handler: () => {
          console.log('Second Handler');
        }
      }]
    } 
    );
    

    await alert.present();
  }
  async tarjetaAlert(){
    const alert = await this.alertController.create({
      header: 'Solicitud de servicio',
      subHeader: 'Solicitud de taejeta de credito',
      message: 'Presione aceptar para que un agente se comunique con usted para comenzar el proceso de solicitud de tarjeta de credito.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelo la solicitud');     
        }
      }, 
      {
        text: 'Aceptar',
          cssClass: 'secondary',
        handler: () => {
          console.log('Second Handler');
        }
      }]
    } 
    );
    

    await alert.present();
  }
  async otroAlert(){
    const alert = await this.alertController.create({
      header: 'Solicitud de servicio',
      subHeader: 'Solicitud de servicio',
      message: 'Presione aceptar para que un agente se comunique con usted.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancelo la solicitud');     
        }
      }, 
      {
        text: 'Aceptar',
          cssClass: 'secondary',
        handler: () => {
          console.log('Second Handler');
        }
      }]
    } 
    );
    

    await alert.present();
  }
  ngOnInit() {
  }

}
