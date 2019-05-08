import { Electorate } from '../electorate/electorate';
import { Election } from '../election/election';

export class House {
  private storedElectorates: Electorate[];
  constructor(
    readonly id: string,
    readonly  title: string,
    readonly election: Election) {
  }
  get electorates(): Electorate[] {
    return this.storedElectorates;
  }

  set electorates(electorates: Electorate[]) {
    this.storedElectorates = electorates;
  }

  addElectorate(electorate: Electorate) {
    this.storedElectorates.push(electorate);
  }
}
