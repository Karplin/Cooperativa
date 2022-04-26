import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Api } from '../Interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apipath = 'https://coopdgii.com/coopvirtual/App';

  
  
  get httpParams(){
    return new HttpParams();
  }

  xparams = new HttpParams();

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.apipath}`;
    return this.http.get<Api[]>(path);
  }
  getTask(id: string) {
    const path = `${this.apipath}/login/`;

    this.xparams =  this.httpParams.set('usuario', '@@@').set('clave', '@@@');

    return this.http.post<Api>(path, this.xparams);
  }
  createTask(api: Api) {
    const path = `${this.apipath}/todos`;
    return this.http.post(path, api);
  }
}
