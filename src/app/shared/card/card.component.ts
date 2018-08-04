import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-card',
  template: `
    <div class="cardContainer" (mouseenter)="hoverToggle()"
        (mouseleave)="hoverToggle()"
        [id]="cardId"
        [ngStyle]="{'background-image': 'url(' + imagePath + ')'}">
      <div class="overlay">
        <h3 class="cardTitle">{{ project.name }}</h3>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() project: Project;
  @Input() cardId: number;
  @Input() useDesign: boolean;
  imagePath: string;

  constructor() {}

  ngOnInit() {
    this.setImagePath();
  }

  setImagePath(): void {
    this.imagePath = this.useDesign
      ? this.project.designImageUrl
      : this.project.projectImageUrl;
  }

  hoverToggle(): void {
    const card = document.getElementById('' + this.cardId) as HTMLElement;
    card.classList.toggle('hover');
  }
}
