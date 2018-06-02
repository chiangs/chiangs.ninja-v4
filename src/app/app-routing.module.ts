import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CreateComponent } from './create/create.component';
import { DesignComponent } from './design/design.component';
import { CodeComponent } from './code/code.component';
import { PhotographyComponent } from './create/photography/photography.component';
import { LeatherworkComponent } from './create/leatherwork/leatherwork.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'welcome', component: LandingComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'design', component: DesignComponent },
  { path: 'code', component: CodeComponent },
  {
    path: 'create',
    component: CreateComponent,
    children: [
      { path: 'photography', component: PhotographyComponent },
      { path: 'leatherwork', component: LeatherworkComponent }
    ]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
