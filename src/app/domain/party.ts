/**
 * A party in an election.
 */
export class Party {

  /**
   * Create a new party.
   * @param code The party code for this election.
   * @param title The party title for this election.
   * @param electionCode The election code.
   */
  constructor(
    code: string,
    title: string,
    electionCode: string
  ) {
    this.code = code;
    this.title = title;
    this.electionCode = electionCode;
  }

  /**
   * Party code for the election.
   */
  code: string;

  /**
   * Title of the party for the election.
   */
  title: string;

  /**
   * The election code.
   * required
   */
  electionCode: string;

  /**
   * Candidates in this party for the election.
   * required
   */
  candidateCodes: string[];
}
