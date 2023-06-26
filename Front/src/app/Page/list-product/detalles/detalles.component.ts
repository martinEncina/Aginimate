import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allProductsI } from 'src/app/interface/models';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
       id!:number;
       console=console
       producto!:  allProductsI; 
      

       constructor(
        private servicio: ServiceService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
       ) {}
       
       ngOnInit(): void {
       this.activatedRoute.paramMap.subscribe((params) => {
         this.id = Number(params.get('id'));
        //  console.log(params);         
       });
       this.servicio.getProduct(this.id).subscribe((data: any) => {
          this.producto = data;
       });
     
}
}