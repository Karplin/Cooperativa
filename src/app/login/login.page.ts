import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Servicios/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 cedula1: string;
 clave1: string;
 info = {}
  constructor(
    private ApiService: ApiService
  ) {}


  getTask() {
    let cedula1 = this.cedula1;
    let clave1 = this.clave1;
    this.ApiService.getTask(cedula1, clave1)
    .subscribe(api => {
      console.log(api);
    });
  }
  ngOnInit() {
  }

}
