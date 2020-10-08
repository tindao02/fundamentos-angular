import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form02',
  templateUrl: './funcionario-form02.component.html',
  styleUrls: ['./funcionario-form02.component.css']
})
export class FuncionarioForm02Component implements OnInit 
{
  public nome5: string = '';
  
  private ultimoId3: number = 1;
  
  private adicionado3: boolean = false;

  @Output('criado') funcionarioAdicionado = new EventEmitter();


  constructor() { }

  public adicionar6(): void
  {
    this.setAdicionado3(true);

    const funcionario = {
      id: this.getUltimoId3(),
      nome: this.nome5
    };

    this.funcionarioAdicionado.emit(funcionario);
    this.setUltimoId3(1 + this.getUltimoId3());
  }

  ngOnInit(): void {
  }

  public getAdicionado3(): boolean
  {
    return this.adicionado3;
  }
  public setAdicionado3(adicionado3: boolean): void
  {
    this.adicionado3 = adicionado3;
  }

  public getUltimoId3(): number
  {
    return this.ultimoId3;
  }
  public setUltimoId3(ultimoId3: number): void
  {
    this.ultimoId3 = ultimoId3;
  }

}
