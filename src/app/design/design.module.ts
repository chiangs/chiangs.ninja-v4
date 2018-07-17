import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DesignComponent } from './design/design.component';
import { DesignRoutingModule } from './design-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, DesignRoutingModule],
  declarations: [DesignComponent]
})
export class DesignModule {}
