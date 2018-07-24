import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal">
      <div class="modalContent">
        <div class="section modalNav">
          <ul>
            <li class="column"><a class="button" (click)="previousModal()">&#12296;</a></li>
            <li class="column"><a class="button" (click)="nextModal()">&#12297;</a></li>
            <li class="column"><a class="button" (click)="closeModal()">&#9587;</a></li>
          </ul>
        </div>
        <div class="section modalFeatureImage"></div>
        <div class="section modalProjectDetails">
          <h3>{{ project.name }}</h3>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() project: Project;
  @Output() modalNavAction: EventEmitter<any>;

  constructor(private projectSvc: ProjectService) {
    this.modalNavAction = new EventEmitter();
    // TODO: Need ProjectID property?
  }

  ngOnInit() {}

  previousModal(): void {
    this.modalNavAction.emit('previous');
  }

  nextModal(): void {
    this.modalNavAction.emit('next');
  }

  closeModal(): void {
    this.modalNavAction.emit('close');
  }
}
