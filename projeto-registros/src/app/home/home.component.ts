import { Component, OnInit } from '@angular/core';
import { Registro } from '../model/Registro';
import { AlertasService } from '../service/alertas.service';
import { RegistrosService } from '../service/registros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaRegistros: Registro[]

  constructor(private registroService: RegistrosService, private alerta: AlertasService) { }

  ngOnInit(){
    window.scroll(0,0)
    this.listarRegistros()
  }

  listarRegistros(){
    return this.registroService.listarRegistros().subscribe((resp: Registro[]) => {
      this.listaRegistros = resp
    })
  }

  deletarRegistro(id: number){
    return this.registroService.deletarRegistro(id).subscribe(() => {
      this.alerta.showAlertInfo("Registro deletado.")
    }, error => this.alerta.showAlertDanger("Não foi possível deletar o registro, tente novamente."))
  }

}
