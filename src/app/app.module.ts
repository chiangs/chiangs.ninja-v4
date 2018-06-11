import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { PhotographyComponent } from './create/photography/photography.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GalleryComponent } from './create/photography/gallery/gallery.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import { LandingTitleComponent } from './landing/landing-title/landing-title.component';
import { LandingTaglineComponent } from './landing/landing-tagline/landing-tagline.component';
import { CodeComponent } from './code/code.component';
import { DesignComponent } from './design/design.component';
import { ContextIntroComponent } from './shared/context-intro/context-intro.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SocialMediaLinksComponent } from './shared/social-media-links/social-media-links.component';
import { MenuListComponent } from './landing/menu-list/menu-list.component';
import { LanguageSwitcherComponent } from './shared/language-switcher/language-switcher.component';
import { CreateNavComponent } from './create/create-nav/create-nav.component';
import { LeatherworkComponent } from './create/leatherwork/leatherwork.component';
import { MenuTabbedComponent } from './shared/menu-tabbed/menu-tabbed.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    CreateComponent,
    PhotographyComponent,
    GalleryComponent,
    NavbarComponent,
    LandingComponent,
    LandingTitleComponent,
    LandingTaglineComponent,
    CodeComponent,
    DesignComponent,
    ContextIntroComponent,
    FooterComponent,
    SocialMediaLinksComponent,
    MenuListComponent,
    LanguageSwitcherComponent,
    CreateNavComponent,
    LeatherworkComponent,
    MenuTabbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
