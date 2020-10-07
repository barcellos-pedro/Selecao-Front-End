import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../model/Registro';
import { AlertasService } from '../service/alertas.service';
import { RegistrosService } from '../service/registros.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  constructor(private registroService: RegistrosService, private router: Router, private alerta: AlertasService) { }

  registro: Registro = new Registro()

  ngOnInit() {
    window.scroll(0,0)
  }

  cadastrarRegistro(){
    if(this.registro.name == null || this.registro.price == null  || this.registro.sku == null){
      this.alerta.showAlertWarning("Preencha corretamente os campos.")
      return;
    } else {
      return this.registroService.cadastrarRegistro(this.registro).subscribe((resp: Registro) => {
        this.registro = resp
        this.router.navigate(['/home'])
        this.alerta.showAlertSuccess("Registro cadastrado com sucesso!")
      });
    }
  }

}
