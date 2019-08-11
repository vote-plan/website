import { Candidate } from './candidate';

describe('Candidate', () => {
  it('should create an instance', () => {
    expect(new Candidate('c', 'Name', 'eo', 'A1')).toBeTruthy();
  });
});
