import { Component, OnInit } from '@angular/core';
import { Api } from './Interfaces/api.interface';
import { ApiService } from './Servicios/api.service';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuentas', url: '/cuentas', icon: 'cash' },
    { title: 'Prestamos', url: '/prestamos', icon: 'card' },
    { title: 'Inversiones', url: '/inversiones', icon: 'wallet' },
    { title: 'Solicitudes', url: '/solicitudes', icon: 'accessibility' },
    { title: 'Descuentos', url: '/descuentos', icon: 'pricetag' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Sugerencias', url: '/sugerencias', icon: 'alert' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' },
    { title: 'Tasas', url: '/tasas', icon: 'bulb' },
    { title: 'Configuración', url: '/configuracion', icon: 'build' },
  ];

  api: Api[] = [];
  clave
  cedula
  mesage = 'hola';
  nombre: string;
  apellido: string;
  mensaje: string;


    
  constructor(
    private ApiService: ApiService
   
  ) {}
  id: string;

  getAllTasks() {
    this.ApiService.getAllTasks()
    .subscribe(api => {
      console.log(api);
      api.forEach(element => {
        this.api.push(element)
      });
    });
    
  }
  getTask(cedula, clave) {
    this.api = [];
    this.ApiService.getTask(cedula, clave)
    .subscribe(api => {
      this.api.push(api);
      console.log(api);
      this.mensaje = api.mensaje[0];
    });
  }

  getMessage(msg, name) {
   // this.mesage = name;

  }
  createTask() {
    const Api = {
      userId: '1',
      title: 'change title',
      completed: true
    };
   /* this.ApiService.createTask(Api)
    .subscribe((newTask) => {
      console.log(newTask);
    });*/
  }

}
