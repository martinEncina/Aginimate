import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servicio: ServiceService,
    private router: Router,
  ) {}

  public newProduct = this.servicio.productData;
  public productId = this.servicio.productId;

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: [this.newProduct.title, [Validators.required]],
      price: [this.newProduct.price, [Validators.required]],
      description: [this.newProduct.description, [Validators.required]],
      category: [this.newProduct.category, [Validators.required]],
      image: [this.newProduct.image, [Validators.required]],
    });

    this.productForm.valueChanges.subscribe((changes) => {
      console.log(changes);
      this.newProduct = changes;
    });

    // Verificar si existe un producto para editar
    if (this.productId !== "") {
      this.productForm.patchValue(this.newProduct);
    }
  }

  onSubmit() {
    if (this.productId !== "") {
      this.servicio.putProduct(this.productId, this.newProduct).subscribe();
      alert("Producto editado");
      this.productForm.reset();
      this.router.navigate(["gestion/productos"]);
    } else {
      this.servicio.postProduct(this.newProduct).subscribe();
      alert('Producto creado');
      this.router.navigate(["gestion/productos"]);
      location.reload();
    }
    this.productForm.reset();
  }
}
