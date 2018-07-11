import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'welcome', component: LandingComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'code',
    loadChildren: './code/code.module#CodeModule'
  },
  // { path: 'create', loadChildren: 'create.module#CreateModule' },
  // { path: 'design', loadChildren: 'design.module#DesignModule' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
