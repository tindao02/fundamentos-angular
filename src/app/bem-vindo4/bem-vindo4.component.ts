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
  funcionarios: any = [];
  funcionarios2: any = [];
  funcionarios3 = [];
  public nome3: string = '';
  public nome4: string = '';
  private ultimoId: number = 0;
  private ultimoId2: number = 0;

  public getNome3(): string
  {
    return this.nome3;
  }
  public setNome3(nome3: string): void
  {
    this.nome3 = nome3;
  }

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
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.getNome3()});
    this.setNome3('');
  }
  
  public adicionar5(): void
  {
    this.funcionarios2.push({
      id: ++this.ultimoId2,
      nome: this.nome4});
    this.nome4 = '';
  }

  aoAdicionar(funcionario)
  {
    this.funcionarios3.push(funcionario);
  }

}