import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../Servicios/api.service';
import { datos, Data, Prestamo } from '../../Interfaces/prestamos.interface';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit {

  public prestamos: string;
  monto1 = '';
  monto2 = '';
  monto3 = '';
  monto4 = '';
  balance1 = '';
  balance2 = '';
  balance3 = '';
  balance4 = '';
  mensaje = 'hola';
  nombre = 'hola';
  info = [];
  nombrex = 'hola';
  token = 'TESTACCOUNTTOKEN434234345424323JAJAJA';


  constructor(private activatedRoute: ActivatedRoute,
              private ApiService: ApiService) { }


  getTask_prestamos() {
    let token = this.token;

    this.ApiService.getTask_prestamos(token)
    .subscribe(Data => {
      console.log(Data, 'data');
       //this.nombre = api.nombre;
       this.info = Data.data;
       console.log(this.info, 'info');
       this.monto1 = this.info[0].monto_prestamo;
       this.monto2 = this.info[1].monto_prestamo;
       this.monto3 = this.info[2].monto_prestamo;
       this.monto4 = this.info[3].monto_prestamo;
       this.balance1 = this.info[0].balance_prestamo;
       this.balance2 = this.info[1].balance_prestamo;
       this.balance3 = this.info[2].balance_prestamo;
       this.balance4 = this.info[3].balance_prestamo;
    });

  }


  ngOnInit() {
    this.prestamos = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTask_prestamos();
  }
}
