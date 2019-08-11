import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  faEdit = faEdit;
  faGlobe = faGlobe;
  collapsed = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  navCurrentIsAbout() {
    return this.router.isActive('/about', false);
  }

  navCurrentIsHome(){
    return this.router.isActive('/elections', false) || this.router.isActive('/', false);;
  }
}
