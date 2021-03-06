import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Servicios/api.service';
import {AppComponent} from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 cedula1: string;
 clave1: string;
 mensaje = 'hola';
 nombre = 'hola';
 info = []
 
  constructor(
    private ApiService: ApiService,
    private AppComponent: AppComponent,
    private router: Router
  ) {}


  getTask() {
    let cedula1 = this.cedula1;
    let clave1 = this.clave1;

    this.ApiService.getTask(cedula1, clave1)
    .subscribe(api => {
      console.log(api);
      if (!api) {
        this.router.navigate(['/login']);
        return;
      }

       this.mensaje = api.mensaje;
       //this.nombre = api.nombre;
       this.info = api.data;
       this.mensaje = api.mensaje;
       console.log(this.mensaje);
       console.log(this.info);

       this.router.navigate(['/cuentas']);
    });
    this.AppComponent.getTask(this.cedula1, this.clave1);

  }
  
  ngOnInit() {
  }

}
