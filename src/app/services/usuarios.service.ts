import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {

   }



  getUsers() {

    return this.http.get(`${ this.url }/users`);

  }
}
