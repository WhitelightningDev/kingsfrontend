import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.css']
})
export class Breadcrumb {
  breadcrumbs: { label: string; url: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.buildBreadcrumbs(this.route.root))
      )
      .subscribe(breadcrumbs => {
        this.breadcrumbs = breadcrumbs;
      });
  }

 private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: any[] = []): any[] {
  // Start with Home breadcrumb explicitly
  if (breadcrumbs.length === 0) {
    breadcrumbs.push({ label: 'Home', url: '/' });
  }

  const children = route.children;
  if (children.length === 0) return breadcrumbs;

  for (let child of children) {
    const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL !== '') {
      url += `/${routeURL}`;
      const label = child.snapshot.data['breadcrumb'] || routeURL;
      breadcrumbs.push({ label, url });
    }
    return this.buildBreadcrumbs(child, url, breadcrumbs);
  }

  return breadcrumbs;
}

}
