import { House } from '../house/house';

export class Election {
  private storedHouses: House[];

  constructor(
    readonly id: string,
    readonly  title: string) {
    this.storedHouses = [];
  }

  get houses(): House[] {
    return this.storedHouses;
  }

  set houses(houses: House[]) {
    this.storedHouses = houses;
  }

  addHouse(house: House) {
    this.storedHouses.push(house);
  }
}
