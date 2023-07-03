// Imports Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

// Imports Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

// Esses imports são necessários para se trabalhar
// com pipe currency passando um currency expecifico.
import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';

// Imports Diretivas
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

registerLocaleData(localePt);
@NgModule({
  /* Todo componente deve ser registrado aqui na lista de declarations do modulo para que ele possa ser utilizado.*/
  declarations: [
    AppComponent,
    RedDirective,
    ForDirective,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductReadComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  // É Sempre obrigatório declarar o modulo na lista de imports para que possamos ter acesso aos componentes daquele modulo.
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  // Aqui na lista de providers eu declaro os serviços que serão expostos para fora do modulo
  // de forma que todo o restante da aplicação possa ter acesso a ele.
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
