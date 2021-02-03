import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

users:any=[];


  constructor(private UsuariosService: UsuariosService ) { 
    console.log('Componente tabla-usuarios');

  }

  ngOnInit(): void {
   // let users;

    this.UsuariosService.getUsers()
    .subscribe( resp =>{
      this.users=resp;
      this.users=this.users.data
    })

  }

}
