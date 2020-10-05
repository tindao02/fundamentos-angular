import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo4',
  templateUrl: './bem-vindo4.component.html',
  styleUrls: ['./bem-vindo4.component.css']
})
export class BemVindo4Component
{
  public nome: string = 'Thiago';
  private idade: number = 10;

  public getIdade(): number
  {
    return this.idade;
  }

  public adicionar():void
  {
    console.log(`Adicionando ${this.nome}`);
  }

  public alterarNome(event: any): void
  {
    //console.log(event.target.value);
    this.nome = event.target.value;
  }

}