import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-grid',
  template: `
  <div class="cardsContainer">
    <div class="cardItem" *ngFor="let project of projects; let i = index">
      <app-card [cardId]="i" [imagePath]="project.designImageUrl" [title]="project.name" (click)="onProjectSelect(project)"></app-card>
    </div>
  </div>
  `,
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {
  @Input() projects: Project[];
  @Output() projEmitter: EventEmitter<Project>;

  constructor() {
    this.projEmitter = new EventEmitter();
  }

  ngOnInit() {}

  onProjectSelect(project: Project): void {
    this.projEmitter.emit(project);
  }
}
