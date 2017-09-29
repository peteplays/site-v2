import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as data from '../../data.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contactData = (<any>data).contact;
  url = (<any>data).url;
}
