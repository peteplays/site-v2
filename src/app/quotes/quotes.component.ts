import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as data from '../../data.json';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html'
})
export class QuotesComponent {
  allQuotes = (<any>data).quotes;

  randomNumber = Math.floor(Math.random() * this.allQuotes.length - 1) + 1;
  artistAndQuote = this.allQuotes[this.randomNumber];

  artist = Object.keys(this.artistAndQuote)[0];
  quote = Object.values(this.artistAndQuote)[0];
}
