import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContextIntroComponent } from './context-intro/context-intro.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    ContextIntroComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    NavbarComponent,
    SocialMediaLinksComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  exports: [
    ContextIntroComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    NavbarComponent,
    SocialMediaLinksComponent,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule
  ]
})
export class SharedModule {}
