import { Electorate } from './electorate';

describe('Electorate', () => {
  it('should create an instance', () => {
    expect(new Electorate('eo', 'Title', 'a', 'b')).toBeTruthy();
  });
});
