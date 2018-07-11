import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CodeModule } from './code/code.module';
import { CreateModule } from './create/create.module';
import { DesignModule } from './design/design.module';
import { AppComponent } from './app.component';
import { LandingTaglineComponent } from './landing/landing-tagline/landing-tagline.component';
import { LandingTitleComponent } from './landing/landing-title/landing-title.component';
import { LandingComponent } from './landing/landing.component';
import { MenuListComponent } from './landing/menu-list/menu-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingTitleComponent,
    LandingTaglineComponent,
    MenuListComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    SharedModule,
    CodeModule,
    CreateModule,
    DesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
