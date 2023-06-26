import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allProductsI } from 'src/app/interface/models';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-gestion-producto',
  templateUrl: './gestion-producto.component.html',
  styleUrls: ['./gestion-producto.component.css']
})
export class GestionProductoComponent {
  arrayProducts: allProductsI[] = [];
       id!:number;
       console=console
       producto!:  allProductsI;
        

  constructor(
    private servicio: ServiceService, 
    private router: Router, 
     ) {}
  
  
  ngOnInit(): void {
    this.servicio.getProducts().subscribe((data: any) => {
      this.arrayProducts = [...data];
      // console.log(this.arrayProducts);
    });  
  }
  deleteProduct(id:number){
    this.servicio.deleteProduct(id).subscribe((data:any)=>{
      alert("Producto eliminado")
      this.router.navigate(["gestion/productos"])
      location.reload(); // se usa para que refresque la pagina con los datos actualizados      
    });
  }
  modifyItem(producto: any) {
    this.servicio.modifyItem(producto);
    this.router.navigate(["editar"]);
  }

  newProduct() {
    this.servicio.productData = {
      id: "",
      title: "",
      price: "",
      description: "",
      category: "",
      image:"",
    };
    this.router.navigate(["nuevoProducto"]);
  }
  
  
}


  
  
  

