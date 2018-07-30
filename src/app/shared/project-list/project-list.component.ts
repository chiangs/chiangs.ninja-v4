import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  template: `
    <p>
      project-list under construction!
    </p>
  `,
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];

  constructor() {}

  ngOnInit() {}
}
