import { Component, OnInit } from '@angular/core';
import { allProductsI } from 'src/app/interface/models';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  arrayProducts: allProductsI[] = [];

  constructor(private servicio: ServiceService) {}
  
  ngOnInit(): void {
    this.servicio.getProducts().subscribe((data: any) => {
      this.arrayProducts = [...data];
      // console.log(this.arrayProducts);
    });
  }
}


