/**
 * A candidate, possibly in a party, for an election.
 */
export class Candidate {

  /**
   * Create a candidate in an electorate, on a ballot.
   * @param code The candidate code.
   * @param name The candidate name.
   * @param electorateCode The electorate code.
   * @param ballotCoordinate The coordinate of this candidate on the ballot.
   * @param partyCode The optional party code.
   * @param photoUrl The optional photo url.
   */
  constructor(
    code: string,
    name: string,
    electorateCode: string,
    ballotCoordinate: string,
    partyCode: string = null,
    photoUrl: string = null
  ) {
    this.code = code;
    this.name = name;
    this.electorateCode = electorateCode;
    this.ballotCoordinate = ballotCoordinate;
    this.partyCode = partyCode;
    this.photoUrl = photoUrl;
  }

  /**
   * Candidate code for the election.
   * required
   */
  code: string;

  /**
   * Name of candidate running in election.
   * required
   * can filter by freetext search
   */
  name: string;

  /**
   * Candidate's Party, will be null of independents.
   * optional
   */
  partyCode: string;

  /**
   * Electorate this candidate is running in.
   * required
   */
  electorateCode: string;

  /**
   * Coordinate of candidate on ballot paper, usually numbers and/or letters.
   * required
   * can filter by freetext search
   */
  ballotCoordinate: string;

  /**
   * Url to photo of candidate.
   * optional
   */
  photoUrl: string = null;

  /**
   * Description.
   * optional
   */
  description: string = null;

  /**
   * External links.
   */
  links: object = {};
}
