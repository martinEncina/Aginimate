import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { FooterComponent } from './Core/footer/footer.component';
import { HomeComponent } from './Page/home/home.component';
import { ListProductComponent } from './Page/list-product/list-product.component';
import { DetallesComponent } from './Page/list-product/detalles/detalles.component';
import { GestionProductoComponent } from './Page/gestion-producto/gestion-producto.component';
import { FormComponent } from './Page/gestion-producto/Form/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListProductComponent,
    DetallesComponent,
    GestionProductoComponent,
    FormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
