/**
 * A ballot for an electorate, to elect candidates in an election.
 */
export class Ballot {

  /**
   * Create a ballot for an electorate, in an election.
   * @param code The ballot code.
   * @param electorateCode The electorate code.
   */
  constructor(
    code: string,
    electorateCode: string
  ) {
    this.code = code;
    this.electorateCode = electorateCode;
  }

  /**
   * The ballot code.
   * required
   */
  code: string;

  /**
   * The code for the electorate.
   * required
   */
  electorateCode: string;
}
