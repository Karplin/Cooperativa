import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Interfaces/api.interface';
import { ApiService } from '../../Servicios/api.service';
import { Data } from '../../Interfaces/prestamos.interface';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {

  constructor(
    private ApiService: ApiService,
    private AppComponent: AppComponent

  ) {}
  
  cedula1: string ='@@@';
  clave1: string = '@@@';
  mensaje = 'hola';
  nombre = 'hola';
  info = []

  
  showPassword = false;
  showPassword1 = false;
  showPassword2 = false;

  passwordToggleIcon = 'eye';
  passwordToggleIcon2 = 'eye';
  passwordToggleIcon3 = 'eye';

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon === 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  togglePassword2(): void {
    this.showPassword1 = !this.showPassword1;

    if (this.passwordToggleIcon2 === 'eye') {
      this.passwordToggleIcon2 = 'eye-off';
    } else {
      this.passwordToggleIcon2 = 'eye';
    }
  }

  togglePassword3(): void {
    this.showPassword2 = !this.showPassword2;

    if (this.passwordToggleIcon3 === 'eye') {
      this.passwordToggleIcon3 = 'eye-off';
    } else {
      this.passwordToggleIcon3 = 'eye';
    }
  }

  getTask() {
    let cedula1 = this.cedula1;
    let clave1 = this.clave1;

    this.ApiService.getTask(cedula1, clave1)
    .subscribe(api => {
      console.log(api);
  
       this.mensaje = api.mensaje;
       //this.nombre = api.nombre;
       this.info = api.data;
       this.mensaje = api.mensaje;
       console.log(this.mensaje);
       console.log(this.info);

    });

    this.AppComponent.getTask(this.cedula1, this.clave1);

  }

  ngOnInit() {
    this.getTask();
  }
  

}
