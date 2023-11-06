import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './componentes/landing/landing.component';
import { Error404Component } from './componentes/error404/error404.component';


const routes: Routes = [

  { 
    path: 'landing', 
  component: LandingComponent
 },
 {
  path: '',
  redirectTo: 'landing',
  pathMatch: 'full'
 },
 {
  path: '**',
  component: Error404Component
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
