import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerViewComponent } from './career/career-view/career-view.component';
import { AboutViewComponent } from './about/about-view/about-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: 'about-me', component: AboutViewComponent },
  { path: 'career', component: CareerViewComponent },
  { path: 'other', component: CareerViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
