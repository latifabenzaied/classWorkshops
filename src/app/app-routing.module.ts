import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Home/home/home.component";
import {ResidenceDetailsComponent} from "./Residence/residence-details/residence-details.component";
import {ResdidenceComponentComponent} from "./Residence/resdidence-component/resdidence-component.component";
import {AddResidenceComponent} from "./Residence/add-residence/add-residence.component";
import {AppatmentComponent} from "./Apartment/appatment/appatment.component";
import {ApartmentsByResidenceComponent} from "./Apartment/apartments-by-residence/apartments-by-residence.component";

const routes: Routes = [

  {path: 'details/:id', component: ResidenceDetailsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'residence', component: ResdidenceComponentComponent},
  {path: 'addResidence/:id', component: AddResidenceComponent,data: { id: 'id' }},
  {path: 'apartment', component: AppatmentComponent},
  {path: 'apartmentByResidence/:id', component: ApartmentsByResidenceComponent,data: { id: 'id' }},
  {path: '',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
