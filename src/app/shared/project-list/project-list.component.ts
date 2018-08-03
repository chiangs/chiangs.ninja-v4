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
  <div class="listContainer" [ngClass]="{'phone': isPhone}">
    <div class="section listProjectRow" *ngFor="let project of projects | filter:filteredStatus:'technology'; let i = index" (click)="onProjectSelect(project)">
      <div class="column data name">{{ project.name }}</div>
      <div class="column data year">{{ project.year }}</div>
      <div class="column data contributions">{{ project.contributions | trim: textTrimAmount }}</div>
      <div class="column data url">
        <a href="https://{{ project.url }}" target ="_blank" rel="noopener noreferrer">{{ project.url }}</a>
      </div>
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
    this.textTrimAmount = this.isPhone ? 30 : 80;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filteredStatus = changes.filteredStatus.currentValue;
  }

  onProjectSelect(project: Project): void {
    this.projEmitter.emit(project);
  }
}
