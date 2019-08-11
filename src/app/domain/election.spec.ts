import { Election } from './election';

describe('Election', () => {
  it('should create an instance', () => {
    expect(new Election('e', 'Title', 'au', 2016)).toBeTruthy();
  });
});
