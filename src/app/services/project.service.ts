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
  private tempProj: Project;

  constructor() {
    this.tempProj = new Project('temp');
    this.projectList = Projects;
    this._focusedProject = new BehaviorSubject<Project>(this.tempProj);
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
    project !== null
      ? this._focusedProject.next(project)
      : this._focusedProject.next(this.tempProj);
  }
}
