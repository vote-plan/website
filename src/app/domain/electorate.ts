/**
 * An electorate, in an election, for one or more candidates in an assembly.
 */
export class Electorate {

  /**
   * Create an electorate, with an assembly and a ballot layout
   * @param code The electorate code.
   * @param title The title of the electorate.
   * @param assemblyCode The assembly code.
   * @param ballotCode The ballot code.
   */
  constructor(
    code: string,
    title: string,
    assemblyCode: string,
    ballotCode: string
  ) {
    this.code = code;
    this.title = title;
    this.assemblyCode = assemblyCode;
    this.ballotCode = ballotCode;
  }

  /**
   * The electorate code.
   * required
   */
  code: string;

  /**
   * Name of electorate.
   * required
   * can filter by freetext search
   */
  title: string;

  /**
   * Ballot code.
   * required
   */
  ballotCode: string;

  /**
   * Description.
   * optional
   */
  description: string = null;

  /**
   * The assembly for this electorate.
   */
  assemblyCode: string;

  /**
   * The candidates in this electorate.
   * required
   */
  candidateCodes: string[];

  /**
   * External links.
   */
  links: object = {};
}
