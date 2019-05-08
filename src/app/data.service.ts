import { Injectable } from '@angular/core';
import { Election } from './election/election';
import { ELECTIONS } from './mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getElections(): Observable<Election[]> {
    return of(ELECTIONS);
  }

  getElection(id: string): Observable<Election> {
    return of(ELECTIONS.find(i => i.id === id));
  }
}
