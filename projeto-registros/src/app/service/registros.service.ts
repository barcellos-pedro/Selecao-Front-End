import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../model/Registro';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private http: HttpClient) { }

  listarRegistros(){
    return this.http.get("http://angular-test.blabs.us/");
  }

  cadastrarRegistro(registro: Registro){
    return this.http.post("http://angular-test.blabs.us/", registro);
  }

  deletarRegistro(id: number){
    return this.http.delete(`http://angular-test.blabs.us/?id=${id}`);
  }
  
}
