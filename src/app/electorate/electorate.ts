import { House } from '../house/house';

export class Electorate {
  constructor(
    readonly id: string,
    readonly  title: string,
    readonly house: House) {
  }
}
