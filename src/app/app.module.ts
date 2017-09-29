import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    QuotesComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
