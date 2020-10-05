import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo4',
  templateUrl: './bem-vindo4.component.html',
  styleUrls: ['./bem-vindo4.component.css']
})
export class BemVindo4Component
{
  nome: string = 'Thiago';
  idade: number = 10;

  public getIdade(): number
  {
    return this.idade;
  }

}