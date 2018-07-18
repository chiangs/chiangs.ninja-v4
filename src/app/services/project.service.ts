import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Projects } from './project.list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectList: Project[];

  constructor() {
    this.projectList = Projects;
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
}
