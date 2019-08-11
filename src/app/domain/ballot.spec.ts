import { Ballot } from './ballot';

describe('Ballot', () => {
  it('should create an instance', () => {
    expect(new Ballot('b', 'eo')).toBeTruthy();
  });
});
