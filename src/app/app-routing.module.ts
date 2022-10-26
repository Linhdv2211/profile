import { ResumeViewComponent } from './view/resume-view/resume-view.component';
import { AboutMeViewComponent } from './view/about-me-view/about-me-view.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/about', pathMatch: 'full' }, // redirect to 
  { path: 'about', component: AboutMeViewComponent },
  { path: 'resume', component: ResumeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
