/**
 * An election.
 */
export class Election {

  /**
   * Create a new election, with title, country, and year.
   * @param code The election code.
   * @param title The election title.
   * @param country The country of the election.
   * @param year The year of the election.
   */
  constructor(
    code: string,
    title: string,
    country: string,
    year: number
  ) {
    this.code = code;
    this.title = title;
    this.country = country;
    this.year = year;
  }

  /**
   * The election code.
   * required
   */
  code: string;

  /**
   * Name of election.
   * required
   * can filter by freetext search
   */
  title: string;

  /**
   * The election is for this country.
   * required
   * filter via list
   */
  country: string;

  /**
   * Name of governing insitution, usually a Parliament or Congress or local government.
   * optional
   * can filter by freetext search
   */
  institution: string = null;

  /**
   * Description of election.
   * optional
   */
  description: string = null;

  /**
   * The locality of the election, usually a city or city-sized region.
   * optional
   * filter via freetext search
   */
  localityName: string = null;

  /**
   * The administrative area of the election, usually a State or Province or County or Council.
   * optional
   * can filter via freetext search
   */
  administrativeAreaName: string = null;

  /**
   * Year of election
   * required
   * filter via list
   */
  year: number;

  /**
   * Month of election (starts at 1).
   * optional
   * filter via list
   */
  month: number = null;

  /**
   * Day of election.
   * optional
   * filter via list
   */
  day: number = null;

  /**
   * List of assembly codes in this election.
   * required.
   */
  assemblyCodes: string[];

  /**
   * List of parties in this election.
   * required.
   */

  partyCodes: string[];

  /**
   * External links for election.
   */
  links: object = {};
}
