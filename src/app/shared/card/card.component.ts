import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="cardContainer"
      (mouseenter)="hoverToggle()"
      (mouseleave)="hoverToggle()"
      [id]="cardId"
      [ngStyle]="{'background-image': 'url(' + imagePath + ')'}">
      <h3 class="cardTitle">{{ title }}</h3>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() imagePath: string;
  @Input() cardId: number;

  constructor() {}

  ngOnInit() {}

  hoverToggle(): void {
    const card = document.getElementById('' + this.cardId) as HTMLElement;
    card.classList.toggle('hover');
  }
}
