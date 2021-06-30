import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

baseUrl = environment.mainUrl + '/v1/usuarios'

constructor(private http: HttpClient) { }

getAll(): Observable<Usuario[]>{
  return this.http.get<Usuario[]>(this.baseUrl);
}

}
