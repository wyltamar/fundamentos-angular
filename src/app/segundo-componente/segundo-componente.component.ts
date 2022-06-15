import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "Luiz Gonzaga";
  dataNascimento = "1912/12/13";
  urlImagem = "/assets/luiz.jpg";

  mostraDataNascimento(){
    alert(`A data de nascimento de ${this.nome} é ${this.dataNascimento}`) ;
  }

}
