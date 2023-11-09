import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dark = false;

  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.updateDarkMode();
      }
    );
  }

  ngOnInit(): void {
    // Grab all the menu items
    const menuItems = document.querySelectorAll('.menu-item');

    // Function to add the animation class with a delay
    const staggeredFadeIn = (elements: NodeListOf<Element>, delay: number) => {
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('fade-in-left');
        }, index * delay);
      });
    };

    // Call the function with a 100ms delay between each item
    staggeredFadeIn(menuItems, 500);
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', !this.dark);
  }

}
