import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { Projects } from './project.list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  _focusedProject: Subject<Project>;
  private projectList: Project[];

  constructor() {
    const tempProj = new Project('temp');
    this.projectList = Projects;
    this._focusedProject = new BehaviorSubject<Project>(tempProj);
  }

  getProjects(): Project[] {
    return this.projectList;
  }

  getDesignProjects(): Project[] {
    return this.getProjectsType('Designer');
  }

  getCodeProjects(): Project[] {
    return this.getProjectsType(`Developer`);
  }

  getProjectsType(role: string): Project[] {
    const designProjectList = [];
    this.projectList.forEach(project => {
      if (project.roles.includes(role)) {
        designProjectList.push(project);
      }
    });
    return designProjectList;
  }

  getFocusProject(): Observable<Project> {
    return this._focusedProject.asObservable();
  }

  setFocusProject(project: Project): void {
    this._focusedProject.next(project);
  }
}
