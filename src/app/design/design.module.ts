import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './design/design.component';

@NgModule({
  imports: [CommonModule, DesignRoutingModule],
  declarations: [DesignComponent]
})
export class DesignModule {}
