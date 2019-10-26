import { TestDirective } from './appDirectives/test.directive';
import { UtilityService } from './service/utility.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushSliceComponent } from './push-slice/push-slice.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { TVComponent } from './tv/tv.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import {HttpClientModule} from "@angular/common/http";
import { SubjectComponent } from './subject/subject.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewSubChildComponent } from './view-sub-child/view-sub-child.component';
import { ViewSubChild1Component } from './view-sub-child1/view-sub-child1.component';
import { ViewChild1Component } from './view-child1/view-child1.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ClassStyleComponent,
    EventBindComponent,
    TwoWayComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
    PushSliceComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
    LaptopComponent,
    MobileComponent,
    TVComponent,
    WashingMachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ServiceDataComponent,
    SubjectComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    LifeCycleComponent,
    ViewChildComponent,
    ViewSubChildComponent,
    ViewSubChild1Component,
    ViewChild1Component,
    TestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
