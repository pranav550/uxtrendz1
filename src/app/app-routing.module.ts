import { ViewChildComponent } from './view-child/view-child.component';
import { SubjectComponent } from './subject/subject.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import { ParentComponent } from './parent/parent.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { TVComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ViewChild1Component } from './view-child1/view-child1.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent, children:[
    // {path:'', component:ProductsComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'mobile', component:MobileComponent},
    {path:'tv', component:TVComponent},
    {path:'washingmachine', component:WashingMachineComponent},
  ]},
  {path:'contact', component:ContactComponent},
  {path:'parent', component:ParentComponent},
  {path:'serviceData', component:ServiceDataComponent},
  {path:'subject', component:SubjectComponent},
  {path:'view', component:ViewChildComponent},
  {path:'view1', component:ViewChild1Component},
  {path:'**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
