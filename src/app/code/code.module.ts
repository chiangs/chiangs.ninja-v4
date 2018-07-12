import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeRoutingModule } from './code-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CodeComponent } from './code/code.component';

@NgModule({
  imports: [CommonModule, SharedModule, CodeRoutingModule],
  declarations: [CodeComponent]
})
export class CodeModule {}
