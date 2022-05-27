import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './components/product/product-crud/product-crud.component';
// import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductCrudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
