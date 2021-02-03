import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { TablaUsuariosComponent } from '../tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UsuariosModule { 
/*
  url: string = 'http://localhost:8000/api/users';
  error;

  constructor(private http: HttpClient) { } // <---

  ngOnInit() {   // <---
    this.http.get<any>(this.url).subscribe(data => {
       this.totalAngularPackages = data.total;
    },error => this.error = error);
  }

  onSubmit() { 
    console.log("onSubmit(): this.totalAngularPackages: "+this.totalAngularPackages);
  }
*/
}
