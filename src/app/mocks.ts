import { Electorate } from './electorate/electorate';
import { House } from './house/house';
import { Election } from './election/election';

const ELECTION1 = new Election('au-2019-05', 'Australia 2019');
const ELECTION2 = new Election('au-2016-07', 'Australia 2016');
const ELECTION3 = new Election('au-2013-09', 'Australia 2013');

const HOUSE1 = new House('reps', 'House of Reps', ELECTION1);
const HOUSE2 = new House('senate', 'Senate', ELECTION1);

ELECTION1.addHouse(HOUSE1);
ELECTION1.addHouse(HOUSE2);

const ELECTORATE1 = new Electorate('electorate1', 'Electorate One', HOUSE1);
const ELECTORATE2 = new Electorate('electorate2', 'Electorate Two', HOUSE1);
const ELECTORATE3 = new Electorate('electorate3', 'Electorate Three', HOUSE2);
const ELECTORATE4 = new Electorate('electorate4', 'Electorate Four', HOUSE2);



export const ELECTORATES: Electorate[] = [ELECTORATE1, ELECTORATE2, ELECTORATE3, ELECTORATE4];

export const HOUSES: House[] = [HOUSE1, HOUSE2];

export const ELECTIONS: Election[] = [ELECTION1, ELECTION2, ELECTION3];
