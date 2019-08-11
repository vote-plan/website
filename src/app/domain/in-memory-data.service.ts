import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Election } from './election';
import { Assembly } from './assembly';
import { Electorate } from './electorate';
import { Candidate } from './candidate';
import { Party } from './party';
import { Ballot } from './ballot';

/**
 * Class that creates an in-memory database
 *
 * Its `createDb` method creates a hash of named collections that represents the database
 *
 * For maximum flexibility, the service may define HTTP method overrides.
 * Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
 * If a request has a matching method, it will be called as in
 * `get(info: requestInfo, db: {})` where `db` is the database object described above.
 */
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  private elections: Election[] = [];

  private assemblies: Assembly[] = [];

  private electorates: Electorate[] = [];

  private candidates: Candidate[] = [];

  private parties: Party[] = [];

  private ballots: Ballot[] = [];

  constructor() {
    this.populateFakeData();
  }

  populateFakeData() {
    const election1 = new Election('e1', 'Test Election 1', 'au', 2016);
    const assembly1 = new Assembly('a1', 'Test Assembly 1', 'e1');
    const ballot1 = new Ballot('b1', 'e1');
    const electorate1 = new Electorate('eo1', 'Test Electorate 1', 'e1', 'b1');
    const party1 = new Party('p1', 'Test Party 1', 'e1');
    const candidate1 = new Candidate('c1', 'Test Candidate 1', 'e1', 'A1', 'p1');

    const election2 = new Election('e2', 'Test Election 2', 'au', 2019);
    const assembly2 = new Assembly('a2', 'Test Assembly 2', 'e2');
    const ballot2 = new Ballot('b2', 'e2');
    const electorate2 = new Electorate('eo2', 'Test Electorate 2', 'e2', 'b2');
    const party2 = new Party('p2', 'Test Party 2', 'e2');
    const candidate2 = new Candidate('c2', 'Test Candidate 2', 'e2', 'A2', 'p2');

    this.elections = [election1, election2];
    this.assemblies = [assembly1, assembly2];
    this.ballots = [ballot1, ballot2];
    this.electorates = [electorate1, electorate2];
    this.parties = [party1, party2];
    this.candidates = [candidate1, candidate2];
  }

  /**
   * Creates an in-memory "database" hash whose keys are collection names
   * and whose values are arrays of collection objects to return or update.
   *
   * returns Observable of the database because could have to create it asynchronously.
   *
   * This method must be safe to call repeatedly.
   * Each time it should return a new object with new arrays containing new item objects.
   * This condition allows the in-memory backend service to mutate the collections
   * and their items without touching the original source data.
   *
   * The in-mem backend service calls this method without a value the first time.
   * The service calls it with the `RequestInfo` when it receives a POST `commands/resetDb` request.
   * Your InMemoryDbService can adjust its behavior accordingly.
   */
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    if (!reqInfo) {
      return {
        elections: this.elections,
        assemblies: this.assemblies,
        electorates: this.electorates,
        candidates: this.candidates,
        parties: this.parties,
        ballots: this.ballots,
      };
    } else {
      return {};
    }
  }
}
