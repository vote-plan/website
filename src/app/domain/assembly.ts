/**
 * An government assembly that is part of an election.
 */
export class Assembly {

  /**
   * Create an assembly in an election.
   * @param code The assembly code.
   * @param title The name of the assembly.
   * @param electionCode The code of the election.
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
   * The assembly code.
   * required
   */
  code: string;

  /**
   * Name of assembly, usually House of Representatives or Senate
   * required
   * can filter by freetext search
   */
  title: string;

  /**
   * The election for this assembly.
   * One assembly may be in multiple elections, each election is a seprate instance of an assembly.
   * required.
   */
  electionCode: string;

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
