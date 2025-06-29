import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

// Breadcrumb Component
import { Breadcrumb } from '../breadcrumb/breadcrumb';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    Breadcrumb,
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'], // ✅ Corrected this
})
export class Navbar {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Book a Wash', route: '/make-a-booking' },
  ];
}
