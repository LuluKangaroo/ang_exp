import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { ServicesComponent } from './modules/services/services.component';
import { AboutComponent } from './modules/about/about.component';
import { SocialsComponent } from './modules/socials/socials.component';

import { WorkComponent } from './modules/work/work.component';
import { PortfolioComponent } from './modules/work/portfolio/portfolio.component';
import { ResumeComponent } from './modules/work/resume/resume.component';

import { PageNotFoundComponent } from './core/PageNotFound/pageNotFound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'socials',
    component: SocialsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
