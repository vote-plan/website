import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Breadcrumb } from './breadcrumb';

@Component({
  selector: 'app-app-breadcrumb',
  templateUrl: './app-breadcrumb.component.html',
  styleUrls: ['./app-breadcrumb.component.css']
})
export class AppBreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.populate();
  }

  ngOnInit() {
  }

  private populate() {
    // subscribe to a subset of router events to update the breadcrumb when navigation successfully ends.
    // breadcrumbs are build from the path from the top level route to the current route.
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = [];
        let current = this.route;
        while (current.firstChild) {
          this.breadcrumbs.push(new Breadcrumb(current.firstChild));
          current = current.firstChild;
        }
      });
  }

}
