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
  public nome2 = 'Manoel';
  private adicionado: boolean = false;

  public getIdade(): number
  {
    return this.idade;
  }

  public getNome2(): string
  {
    return this.nome2;
  }

  public getAdicionado(): boolean
  {
    return this.adicionado;
  }

  public setAdicionado(adicionado: boolean): void
  {
    this.adicionado = adicionado;
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
    console.log(this.nome + " xxxx " + this.nome2);
    
  }

  public adicionar3(): void
  {
    this.adicionado = true;
    console.log(this.getAdicionado());
    
  }

  public adicionar4(): void
  {
    this.adicionado = false;
  }

}