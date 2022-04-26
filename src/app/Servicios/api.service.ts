import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Api } from '../Interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apipath = 'https://coopdgii.com/coopvirtual/App';
  private token = 'TESTACCOUNTTOKEN434234345424323JAJAJA';
  
  datos = []
  get httpParams(){
    return new HttpParams();
  }


  constructor(
    private http: HttpClient,
  ) { }

  getAllTasks() {
    const path = `${this.apipath}`;
    return this.http.get<Api[]>(path);
  }
  getTask(cedula: string, clave: string) {
    const path = `${this.apipath}/login/`;
    return this.http.post<Api>(path, this.httpParams.set('usuario', cedula).set('clave', clave));
  }
  /*taskToArray(cedula: string, clave: string){
   this.datos = this.getTask(cedula, clave);
    
  }*/

  getTask_resumen(id: string) {
    const path = `${this.apipath}/resumen/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }
  
  getTask_prestamos(id: string) {
    const path = `${this.apipath}/prestamos/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }

   
  getTask_solicitudes(id: string) {
    const path = `${this.apipath}/solicitudes/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }

  getTask_solicitudes_tipo(id: string) {
    const path = `${this.apipath}/solicitudes_tipo/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }

  getTask_solicitudes_registro(id: string) {
    const path = `${this.apipath}/solicitudes_registro/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }

  getTask_descuentos(id: string) {
    const path = `${this.apipath}/descuentos/`;

    return this.http.post<Api>(path, this.httpParams.set('token', this.token));
  }


  createTask(api: Api) {
    const path = `${this.apipath}/todos`;
    return this.http.post(path, api);
  }
}
