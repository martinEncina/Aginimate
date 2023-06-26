import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allProductsI } from '../interface/models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  console=console
  urlApi: string = "http://localhost:3000/producto" // se guarda los datos de la api en una variable
  producto!:  allProductsI; 
  id!:number;
  productId!: any;

  public productData = { //producData guardará la informacion que el admin ponga
    id:'',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
  };

  constructor(private http: HttpClient) {} // costructor crea el objeto para inicializar o dejarlo listo para usarlo
    getProducts() {      // obtengo todos los datos
      return this.http.get(this.urlApi)
    }
    getProduct(id: number) { // detalle de cada producto
      return this.http.get(`${this.urlApi}/${id}`);
    }
    deleteProduct(id: number) { // funcion para elimiar producto
      return this.http.delete(`${this.urlApi}/${id}`);
    }
    postProduct(producto: any) { // funcion para agregar
      return this.http.post(this.urlApi, producto);
    }
   

    modifyItem(producto: any) {
      this.productData = { ...producto }; // Copiar los datos del producto en productData
      this.productId = producto.id;
      console.log(this.productId);
      console.log(this.productData);
    }
    putProduct(productId: any, productData: any) {
      console.log(this.productData);
      console.log(this.productId);
      return this.http.put(`${this.urlApi}/${this.productId}`, productData);
  
    }
}

