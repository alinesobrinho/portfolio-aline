import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layout/navbar/navbar";
import { Home } from "./features/home/home";
import { Footer } from "./core/layout/footer/footer";
import { About } from './features/about/about';
import { Skills } from "./features/skills/skills";
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-aline');
}
