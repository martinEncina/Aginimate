import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./Page/home/home.component";  // se importa para traer los datos
import { ListProductComponent } from "./Page/list-product/list-product.component" // se importa para traer los datos
import { DetallesComponent } from './Page/list-product/detalles/detalles.component';
import { GestionProductoComponent } from './Page/gestion-producto/gestion-producto.component';
import { FormComponent } from './Page/gestion-producto/Form/form/form.component';


const routes: Routes = [ // aqui se crea las rutas ej: home, productos.
  { path: "", component: HomeComponent },  // ruta home
  { path: "productos", component: ListProductComponent },  // ruta productos
  { path: "detalles/:id", component: DetallesComponent }, // anda la ruta con cada id que le asigne (: le da dinamismo a la ruta)
  { path: "gestion/productos", component: GestionProductoComponent }, 
  { path: "editar", component: FormComponent }, 
  { path: "nuevoProducto", component: FormComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
