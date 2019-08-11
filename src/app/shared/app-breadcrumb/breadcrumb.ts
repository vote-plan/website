import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of, zip } from 'rxjs';

export class Breadcrumb {
  title: string;
  url: string;

  constructor(private route: ActivatedRoute) {
    // subscribe to the breadcrumb title
    route.data.subscribe(data => {
      this.title = data.breadcrumbTitle;
    });

    // gather the parent activated routes
    const parents = [];
    let item = route;
    while (item) {
      parents.push(item.url);
      item = item.parent;
    }
    parents.reverse();

    // when all the route urls are available, join them all into one url
    zip(...parents).subscribe(o => {
      console.log(o);
      this.url = o.join('/') || '/';
    });
  }
}
