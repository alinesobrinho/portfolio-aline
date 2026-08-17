import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  showDemo = false;

  openDemo(): void {
    this.showDemo = true;
  }

  closeDemo(): void {
    this.showDemo = false;
  }

}