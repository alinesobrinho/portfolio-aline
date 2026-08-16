import {
  Component,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-navbar',

  standalone: true,

  templateUrl: './navbar.html',

  styleUrl: './navbar.scss'
})
export class Navbar {

  activeSection: string = 'home';


  // =========================
  // CLIQUE NO MENU
  // =========================

  setActiveSection(section: string): void {

    this.activeSection = section;

  }


  // =========================
  // DETECTA A SEÇÃO NA TELA
  // =========================

  @HostListener('window:scroll')

  onScroll(): void {

    const sections = [
      'home',
      'about',
      'skills',
      'projects',
      'contact'
    ];


    const scrollPosition =
      window.scrollY + 150;


    for (const section of sections) {

      const element =
        document.getElementById(section);


      if (!element) {
        continue;
      }


      const top =
        element.offsetTop;

      const height =
        element.offsetHeight;


      if (
        scrollPosition >= top &&
        scrollPosition < top + height
      ) {

        this.activeSection = section;

        break;

      }

    }

  }

}