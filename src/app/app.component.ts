import { Component } from '@angular/core';
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

  constructor() {}
}
