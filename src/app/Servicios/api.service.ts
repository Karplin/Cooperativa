import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Api } from '../Interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apipath = 'https://coopdgii.com/coopvirtual/App';


  get httpParams(){
    return new HttpParams()
    .set('fields', 'id,nombre,apellido');
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllTasks() {
    const path = `${this.apipath}`;
    return this.http.get<Api[]>(path);
  }
  getTask(id: string) {
    const path = `${this.apipath}/todos/${id}`;
    return this.http.get<Api>(path);
  }
  createTask(api: Api) {
    const path = `${this.apipath}/todos`;
    return this.http.post(path, api);
  }
}
