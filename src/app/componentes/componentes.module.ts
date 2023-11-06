import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
  
    LandingComponent,
    NavComponent,
    CarouselComponent,
    FooterComponent,
    AboutUsComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    CarouselComponent	, 
    LandingComponent,
    FooterComponent,
    AboutUsComponent, 
    Error404Component
  
  ]
})
export class ComponentesModule { }
