import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Election } from './election';
import { Assembly } from './assembly';
import { Electorate } from './electorate';
import { Candidate } from './candidate';
import { Party } from './party';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../shared/message.service';
import { Ballot } from './ballot';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  // TODO: Update urls of api calls when not using the in-memory db backend
  // TODO: following https://angular.io/tutorial/toh-pt6#simulate-a-data-server
  private urlElections = 'api/elections';
  private urlElection = 'api/elections/{0}';
  private urlAssemblies = 'api/assemblies-{0}';
  private urlAssembly = 'api/assemblies/{0}';
  private urlElectorates = 'api/electorates-{0}';
  private urlElectorate = 'api/electorates/{0}';
  private urlBallots = 'api/ballots-{0}';
  private urlBallot = 'api/ballots/{0}';
  private urlCandidates = 'api/candidates-{0}';
  private urlCandidate = 'api/candidates/{0}';
  private urlParties = 'api/parties';
  private urlParty = 'api/parties/{0}';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  /**
   * Get all elections.
   */
  getElections(): Observable<Election[]> {
    const url = this.urlElections;
    return this.getMany<Election>(url);
  }

  /**
   * Get one election.
   * @param electionCode The election code.
   */
  getElection(electionCode: string): Observable<Election> {
    const url = this.buildUrl(this.urlElection, electionCode);
    return this.getOne<Election>(url);
  }

  /**
   * Get all assemblies for an election.
   * @param electionCode The election code.
   */
  getAssemblies(electionCode: string): Observable<Assembly[]> {
    const url = this.buildUrl(this.urlAssemblies, electionCode);
    return this.getMany<Assembly>(url);
  }

  /**
   * Get an assembly in an election.
   * @param assemblyCode The assembly code.
   */
  getAssembly(assemblyCode: string): Observable<Assembly> {
    const url = this.buildUrl(this.urlAssembly, assemblyCode);
    return this.getOne<Assembly>(url);
  }

  getElectorates(assemblyCode: string): Observable<Electorate[]> {
    const url = this.buildUrl(this.urlElectorates, assemblyCode);
    return this.getMany<Electorate>(url);
  }

  getElectorate(electorateCode: string): Observable<Electorate> {
    const url = this.buildUrl(this.urlElectorate, electorateCode);
    return this.getOne<Electorate>(url);
  }

  getBallots(electorateCode: string): Observable<Ballot[]> {
    const url = this.buildUrl(this.urlBallots, electorateCode);
    return this.getMany<Ballot>(url);
  }

  getBallot(ballotCode: string): Observable<Ballot> {
    const url = this.buildUrl(this.urlBallot, ballotCode);
    return this.getOne<Ballot>(url);
  }

  getCandidates(electionCode: string): Observable<Candidate[]> {
    const url = this.buildUrl(this.urlCandidates, electionCode);
    return this.getMany<Candidate>(url);
  }

  getCandidate(candidateCode: string): Observable<Candidate> {
    const url = this.buildUrl(this.urlCandidate, candidateCode);
    return this.getOne<Candidate>(url);
  }

  getParties(electionCode: string): Observable<Party[]> {
    const url = this.buildUrl(this.urlParties, electionCode);
    return this.getMany<Party>(url);
  }

  getParty(partyCode: string): Observable<Party> {
    const url = this.buildUrl(this.urlParty, partyCode);
    return this.getOne<Party>(url);
  }

  /**
   * Log a HeroService message with the MessageService
   */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Log a web service call.
   * @param url The url that was called.
   */
  private logFetch(url: string) {
    this.messageService.add(`[DomainService]: Fetched ${url}`);
  }

  /**
   * Send a http GET, expecting a response with one item.
   * @param url The url to GET.
   */
  private getOne<T>(url: string) {
    return this.http
      .get<T>(url)
      .pipe(
        tap(_ => this.logFetch(url)),
        catchError(this.handleError<T>(url, null))
      );
  }

  /**
   * Send a http GET, expecting a response with zero, one, or more items.
   * @param url The url to GET.
   */
  private getMany<T>(url: string) {
    return this.http
      .get<T[]>(url)
      .pipe(
        tap(_ => this.logFetch(url)),
        catchError(this.handleError<T[]>(url, []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Replace placeholders in a string with the values.
   * For example: buildUrl("I am {0} replaced {1}!", "possibly", "now");
   * @param formatString The string containing index number placeholders.
   * @param replacements The values to insert.
   */
  private buildUrl(formatString: string, ...replacements: string[]) {
    const args = arguments;
    return formatString.replace(/{(\d+)}/g, (match: string, index: number) => {
      return typeof args[index] !== 'undefined' ? args[index] : match;
    });
  }
}
