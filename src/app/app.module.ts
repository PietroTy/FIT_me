import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SuporteComponent } from './suporte/suporte.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    SuporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
