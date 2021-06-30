import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/usuario';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.mainUrl + '/v1/usuarios'

  constructor(private http: HttpClient) { }
  

  post(usuario:Usuario){
    return this.http.post(this.baseUrl, usuario);
  }

}
