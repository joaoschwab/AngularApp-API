import { Component, OnInit } from '@angular/core';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Usuario } from '../Models/usuario';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.carregarUsuario();
    
  }

  carregarUsuario(){
    this.homeService.getAll().subscribe(
      (usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        console.log(this.usuarios);
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }
}
