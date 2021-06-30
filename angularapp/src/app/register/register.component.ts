import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../Models/usuario';
import { RegisterService } from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.criarForm();
   }

  criarForm(){
    this.usuarioForm = this.fb.group({
      nome:[''],
      sobrenome:[''],
      idade:['']
    });
  }

  salvarUsuario(usuario: Usuario){
    this.registerService.post(usuario).subscribe(
      (retorno: Usuario) => {
        console.log(retorno);
      },
      (erro: any) => {
        console.log(erro);
      }
    )
  }

  usuarioSubmit(){
    this.salvarUsuario(this.usuarioForm.value)
  }

  ngOnInit(): void {
  }

}
