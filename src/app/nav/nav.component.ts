import { Component, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { EasingLogic } from 'ng2-page-scroll';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent{
  selected: string;
  pageScrollDuration = 1100;

  sections = [
    {
      name: "topSection",
      id: 'floatingMenuTopSection',
      classes: "fa-dot-circle-o",
      title: "PetePlays"
    },
    {
      name: "quotesSection",
      id: 'floatingMenuQuotesSection',
      classes: "fa-ellipsis-v fa-ellipsis-c",
      title: "Guitarist Quotes"
    },
    {
      name: "projectSection",
      id: 'floatingMenuProjectSection',
      classes: "fa-square",
      title: "Projects"
    },
    {
      name: "moreSection",
      id: 'floatingMenuMoreSection',
      classes: "fa-ellipsis-v fa-ellipsis-c",
      title: "Tune in Later"
    },
    {
      name: "footerSection",
      id: 'floatingMenuFooterSection',
      classes: "fa-dot-circle-o",
      title: "Contact Info"
    }
  ]

  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
      if (t === 0) { return b; }
      if (t === d) { return b + c; }
      if ((t /= d / 2) < 1) { return c / 2 * Math.pow(2, 10 * (t - 1)) + b; }
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  };

  addClass(selected) {
    this.selected = selected;
  }

  addClassToFloatingMenuWhenInSection(event) {
    const currentYPagePosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const targetPath = (event.target.body.childNodes[0].children) ? event.target.body.childNodes[0].children : event.target.body.childNodes[1].children;

    const fm2 = targetPath.quotesSection.offsetTop - 700;
    const fm3 = targetPath.projectSection.offsetTop - 600;
    const fm4 = targetPath.moreSection.offsetTop - 500;
    const fm5 = targetPath.footerSection.offsetTop - 1600;

    switch (true) {
      case currentYPagePosition < fm2:
        this.selected = 'topSection';
        break;
      case currentYPagePosition >= fm2 && currentYPagePosition < fm3:
        this.selected = 'quotesSection';
        break;
      case currentYPagePosition >= fm3 && currentYPagePosition < fm4:
        this.selected = 'projectSection';
        break;
      case currentYPagePosition >= fm4 && currentYPagePosition < fm5:
        this.selected = 'moreSection';
        break;
      case currentYPagePosition >= fm5:
        this.selected = 'footerSection';
        break;
      default:
        break;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.addClassToFloatingMenuWhenInSection(event);
  }

  constructor() {
    this.selected = 'topSection';
  }
}
