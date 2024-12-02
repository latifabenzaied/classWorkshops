import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResdidenceComponentComponent } from './Residence/resdidence-component/resdidence-component.component';
import { ResidenceDetailsComponent } from './Residence/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './Apartment/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartment/add-apartment/add-apartment.component';
import { AppatmentComponent } from './Apartment/appatment/appatment.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { HeaderComponent } from './Header/header/header.component';
import { TestComponent } from './test/test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ResdidenceComponentComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    AppatmentComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
