import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { BemVindo2Component } from './bem-vindo2/bem-vindo2.component';
import { BemVindo3Component } from './bem-vindo3/bem-vindo3.component';
import { FooComponent } from './foo/foo.component';
import { BemVindo4Component } from './bem-vindo4/bem-vindo4.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioForm02Component } from './funcionario-form02/funcionario-form02.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    BemVindo2Component,
    BemVindo3Component,
    FooComponent,
    BemVindo4Component,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    FuncionarioForm02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
