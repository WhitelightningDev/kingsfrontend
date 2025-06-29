import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

import {
  MatSidenavModule,
  MatDrawerMode,
} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
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
})
export class Navbar {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  navItems = [
    { label: 'Home', route: '/', icon: 'home' },
    { label: 'Book a Wash', route: '/make-a-booking', icon: 'event' },
    { label: 'Prices', route: '/prices', icon: 'attach_money' },
    { label: 'About Us', route: '/about-us', icon: 'info' },
  ];

  drawerMode: MatDrawerMode = 'side';
  drawerOpened = true;

  constructor(private observer: BreakpointObserver) {
    this.observer.observe([Breakpoints.Handset]).subscribe((result) => {
      this.drawerMode = result.matches ? 'over' : 'side';
      this.drawerOpened = !result.matches;
    });
  }

  toggleDrawer() {
    if (this.drawerMode === 'over') {
      this.sidenav.toggle();
    }
  }
}
