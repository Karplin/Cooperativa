import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuentas', url: '/folder/Inbox', icon: 'cash' },
    { title: 'Prestamos', url: '/folder/Outbox', icon: 'card' },
    { title: 'Inversiones', url: '/folder/Favorites', icon: 'wallet' },
    { title: 'Solicitudes', url: '/folder/Archived', icon: 'accessibility' },
    { title: 'Descuentos', url: '/folder/Trash', icon: 'pricetag' },
    { title: 'Noticias', url: '/folder/Spam', icon: 'newspaper' },
    { title: 'Sugerencias', url: '/folder/Spam', icon: 'alert' },
    { title: 'Ayuda', url: '/folder/Spam', icon: 'help' },
    { title: 'Tasas', url: '/folder/Spam', icon: 'bulb' },
    { title: 'Configuración', url: '/folder/Spam', icon: 'build' },
  ];

  constructor() {}
}
