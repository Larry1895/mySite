import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerViewComponent } from './career/career-view/career-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'career', component: CareerViewComponent },
  { path: 'about', component: CareerViewComponent },
  { path: 'home', component: CareerViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
