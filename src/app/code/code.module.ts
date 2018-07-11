import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeRoutingModule } from './code-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { CodeComponent } from './code.component';

@NgModule({
  imports: [CommonModule, CodeRoutingModule, SharedModule],
  declarations: []
})
export class CodeModule {}
