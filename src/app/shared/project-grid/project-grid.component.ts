import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { DeviceSizeService } from '../../services/device-size.service';

@Component({
  selector: 'app-project-grid',
  template: `
  <div class="cardsContainer" [ngClass]="{'phone': isPhone}">
    <div class="cardItem" *ngFor="let project of projects | filter:filteredStatus:'technology'; let i = index">
      <app-card [cardId]="i" [project]="project" [useDesign]="useDesign" (click)="onProjectSelect(project)"></app-card>
    </div>
  </div>
  `,
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit, OnChanges {
  @Input() projects: Project[];
  @Input() filteredStatus: string;
  @Output() projEmitter: EventEmitter<Project>;
  isPhone: boolean;
  useDesign: boolean;

  constructor(private deviceSvc: DeviceSizeService, private router: Router) {
    this.isPhone = this.deviceSvc.isPhone();
    this.projEmitter = new EventEmitter();
    this.useDesign = this.router.url.includes('design') ? true : false;
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.filteredStatus = changes.filteredStatus.currentValue;
  }

  onProjectSelect(project: Project): void {
    this.projEmitter.emit(project);
  }
}
