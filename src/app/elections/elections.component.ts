import { Component, OnInit } from '@angular/core';
import { Election } from '../election/election';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.styl']
})
export class ElectionsComponent implements OnInit {

  elections$: Observable<Election[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.elections$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getElections())
    );
  }
}
