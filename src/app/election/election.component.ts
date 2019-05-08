import { Component, OnInit } from '@angular/core';
import { Election } from './election';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.styl']
})
export class ElectionComponent implements OnInit {

  election$: Observable<Election>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.election$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getElection(params.get('election')))
      // todo: if no match to param, go to not found page
    );
  }

}
