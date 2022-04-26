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
      console.log(Data);
       this.mensaje = Data.ultimo_acceso;
       //this.nombre = api.nombre;
       this.info = Data.prestamos;
       console.log(this.info, 'info');
    });

  }


  ngOnInit() {
    this.prestamos = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTask_prestamos();
  }
}
