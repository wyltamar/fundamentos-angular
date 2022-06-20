import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component{

  descricao = ""

  constructor(public logger: LoggerService){}

  adicionarDescricao(){
    this.logger.logar(`A descrição do produto: ${this.descricao} foi adicionada`)
  }

  exibirTodosLoggs(){
    this.logger.exibeTodosOsLogs();
  }

}
