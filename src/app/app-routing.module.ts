import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { PlaygroundComponent } from './playground/playground.component'; 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: '', redirectTo: '/playground', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
