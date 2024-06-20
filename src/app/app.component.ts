import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShadowComponent } from './components/shadow/shadow.component';
import { ProjectComponent } from './components/project/project.component';
import { PROJECTS } from './interfaces/const';
import { ControlComponent } from './components/control/control.component';
import { ContentComponent } from './components/content/content.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShadowComponent, ProjectComponent, ControlComponent, ContentComponent, IndicatorComponent, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  projects = PROJECTS;
  currentProject = this.projects.length - 1;

  prevProject() {
    this.currentProject = (this.currentProject > 0) ? this.currentProject - 1 : this.projects.length - 1;
  }

  nextProject() {
    this.currentProject = (this.currentProject < this.projects.length - 1) ? this.currentProject + 1 : 0;
  }
}
