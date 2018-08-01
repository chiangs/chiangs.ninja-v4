import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { LeatherworkComponent } from './leatherwork/leatherwork.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  {
    path: '',
    component: CreateComponent,
    children: [
      { path: '', component: PhotographyComponent },
      { path: 'leatherwork', component: LeatherworkComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule {}
