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
import { ButtonComponent } from './button/button.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { CardComponent } from './card/card.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [
    ContextIntroComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    NavbarComponent,
    SocialMediaLinksComponent,
    ButtonComponent,
    NavbarMobileComponent,
    CardComponent,
    ProjectGridComponent,
    ProjectListComponent
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
    ButtonComponent,
    ContextIntroComponent,
    FooterComponent,
    LanguageSwitcherComponent,
    NavbarComponent,
    NavbarMobileComponent,
    SocialMediaLinksComponent,
    MatSlideToggleModule,
    MatTooltipModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    CardComponent,
    ProjectGridComponent,
    ProjectListComponent
  ]
})
export class SharedModule {}
