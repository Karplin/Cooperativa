import { Component } from '@angular/core';
import { Api } from './Interfaces/api.interface';
import { ApiService } from './Servicios/api.service';


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

  constructor(
    private ApiService: ApiService
  ) {}

  getAllTasks() {
    this.ApiService.getAllTasks()
    .subscribe(api => {
      console.log(api);
    });
  }
  getTask() {
    this.ApiService.getTask('@@@', '@@@')
    .subscribe(api => {
      console.log(api);
    });
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
