import { Party } from './party';

describe('Party', () => {
  it('should create an instance', () => {
    expect(new Party('p', 'Title', 'e')).toBeTruthy();
  });
});
