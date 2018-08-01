import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create/create.component';
import { CreateNavComponent } from './create-nav/create-nav.component';
import { LeatherworkComponent } from './leatherwork/leatherwork.component';
import { PhotographyComponent } from './photography/photography.component';
import { GalleryComponent } from './photography/gallery/gallery.component';

@NgModule({
  imports: [CommonModule, CreateRoutingModule, SharedModule],
  declarations: [
    CreateComponent,
    CreateNavComponent,
    LeatherworkComponent,
    PhotographyComponent,
    GalleryComponent
  ]
})
export class CreateModule {}
