import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { MyServiceService } from "./my-service.service";
//router
import { RouterModule, Routes } from "@angular/router";

// animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"about/:id",
    component:AboutComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
