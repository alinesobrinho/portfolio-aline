import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/layout/navbar/navbar";
import { Home } from "./features/home/home";
import { Footer } from "./core/layout/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio-aline');
}
