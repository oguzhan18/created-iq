import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports:[CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @ViewChild('navbarMain') navbarMain!: ElementRef;
  isNavbarOpen = false;

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
    if (this.isNavbarOpen) {
      this.navbarMain.nativeElement.style.display = 'block';
    } else {
      this.navbarMain.nativeElement.style.display = 'none';
    }
  }
}
