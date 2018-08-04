import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Project } from '../../models/project.model';
import { DeviceSizeService } from '../../services/device-size.service';

@Component({
  selector: 'app-project-list',
  template: `
  <div class="listContainer">
    <div class="section listProjectRow" *ngFor="let project of projects | filter:filteredStatus:'technology'; let i = index" 
    (click)="onProjectSelect(project)">
      <div class="column data name" [ngClass]="{'phone': isPhone}">{{ project.name }}</div>
      <div class="column data year" *ngIf="!isPhone">{{ project.year }}</div>
      <div class="column data contributions" *ngIf="!isPhone">{{ project.contributions | trim: textTrimAmount }}</div>
      <div class="column data url" *ngIf="!isPhone">
        <a href="https://{{ project.url }}" target ="_blank" rel="noopener noreferrer">{{ project.url }}</a>
      </div>s
     </div>
  </div>
  `,
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnChanges {
  @Input() projects: Project[];
  @Input() filteredStatus: string;
  @Output() projEmitter: EventEmitter<Project>;
  isPhone: boolean;
  textTrimAmount: number;

  constructor(private deviceSvc: DeviceSizeService) {
    this.isPhone = this.deviceSvc.isPhone();
    this.projEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.textTrimAmount = this.isPhone ? 10 : 80;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filteredStatus = changes.filteredStatus.currentValue;
  }

  onProjectSelect(project: Project): void {
    this.projEmitter.emit(project);
  }
}
