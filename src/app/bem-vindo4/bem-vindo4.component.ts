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
  private nome2: string = '';

  public getIdade(): number
  {
    return this.idade;
  }

  public getNome2(): string
  {
    return this.nome2;
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

  public alterarNome2(event: any): void
  {
    //console.log(event.target.value);
    this.nome2 = event.target.value;
  }

  public adicionar2(nomeInput: string): void
  {
    this.nome = nomeInput;
  }

}