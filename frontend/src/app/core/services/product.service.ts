import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseApi = environment.api;

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  // Aqui será feita uma requisição e o serviço observa a
  // solicitação afim de obter uma resposta quando ela
  // chegar para retonar para o componente.
  create(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseApi}/products`;
    return this.http.post<ProductModel>(url, product);
  }

  read(): Observable<ProductModel[]> {
    const url = `${this.baseApi}/products`;
    return this.http.get<ProductModel[]>(url);
  }

  readById(id: string): Observable<ProductModel> {
    const url = `${this.baseApi}/products/${id}`;
    return this.http.get<ProductModel>(url);
  }

  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseApi}/products/${product.id}`;
    return this.http.put<ProductModel>(url, product);
  }

  delete(id: string): Observable<ProductModel> {
    const url = `${this.baseApi}/products/${id}`;
    return this.http.delete<ProductModel>(url);
  }
}
