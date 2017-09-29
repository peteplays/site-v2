import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as data from '../../data.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = (<any>data).projectSection;
}
