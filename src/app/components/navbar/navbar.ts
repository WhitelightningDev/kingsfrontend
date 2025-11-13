import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMobileMenuOpen = false;
  isOtherMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleOtherMenu(): void {
    this.isOtherMenuOpen = !this.isOtherMenuOpen;
  }
}
