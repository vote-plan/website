import { Assembly } from './assembly';
import { Election } from './election';

describe('Assembly', () => {
  it('should create an instance', () => {
    expect(new Assembly('a', 'Title', 'e')).toBeTruthy();
  });
});
