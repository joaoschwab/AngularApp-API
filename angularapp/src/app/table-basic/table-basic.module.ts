import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../Models/usuario';






@Component({
  selector: 'table-basic',
  templateUrl: './table-basic.html'
})
export class TableBasicModule  {

  @Input() usuariosTable: Usuario[];

  constructor(){

  }



  
  

}
