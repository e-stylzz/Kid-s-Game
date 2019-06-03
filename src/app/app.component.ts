import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Kids-Game';

  constructor(private router: Router) {
    const navEndEvents = router.events.pipe(filter(event => event instanceof NavigationEnd));
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-141286305-1', { page_path: event.urlAfterRedirects });
    });
  }
}
