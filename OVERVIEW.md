# Overview of [Vote Plan](https://www.voteplan.org)

The purpose of this website is to aid people with deciding on their vote.

This is helpful because it can be difficult to take the time to decipher a ballot paper in a busy voting place.

Preparing your vote beforehand takes the guess work out of filling out the ballot paper.


## Flow for preparing a vote

The website supports creating voting plans for more than one election.


### Elections

Attributes:

- Name (required) (can filter by freetext search)
- Name in English (optional) (can filter by freetext search)
- Name of institution (optional) (usually a Parliament or Congress or local government)
- Description (optional)
- Country (required) (can filter via list)
- Language (required) (can filter via list)
- Locality (optional) (usually a city) (can filter via freetext search)
- Administrative Area (optional) (usually a State or Province or County or Council) (can filter via freetext search)
- Year (required) (can filter via list)
- Month (required)
- Day (optional)
- List of links as key pairs: title (key) = url (value)

Information from the browser could be used to initialise the filters.

Once an election is selected, then the list of ballot papers for that election are shown.


### Ballot papers

Attributes:

- Chamber Name (required) (usually House or Representatives or Senate) (can filter by freetext search)
- List of links as key pairs: title (key) = url (value)
- Description (optional)

Once a ballot paper is selected, then the list of candidates is shown.


### Candidates

Attributes:

- Name (required) (as per name used to run in election) (can filter by freetext search)
- Party (optional) (usually has a party, independent candidates will not) (can filter by freetext search)
- Photo (optional) (image)
- List of links as key pairs: title (key) = url (value)
- Description (optional)
- Coordinate on ballot paper (required) (usually a number or possibly letters and numbers) (can filter by freetext search)

Candidates can be ordered / ranked / selected depending on the requirements of the election.
If possible, there may be real-time warnings if some set of candidates is not a formal vote.


## Other Notes

If possible, there is an option to validate that the current set of candidates is a formal vote.
If it is not a formal vote, information about the reason why will be displayed.

Changes are saved as they are made.

There is the option to create a Vote Plan - a printable view of the current set of candidates.
This can be viewed as HTML and PDF.

No data is ever sent back to the server. 
There is no tracking of any kind in the website.
The website must be https.

It is possible to have more than one set of candidates. 
The different sets can be saved locally (with a unique name chosen by the user) and loaded again.


## Pages

- Elections (list of elections)
- Ballots (Details about election and list of ballots)
- Ballot (Details about ballot and list of candidates for one chamber - this is the main page where candidates can be arranged) (only page that can be edited)
- Candidates (Details about election and list of all candidates and parties in election)
- Parties (Details about election and list of parties and candidates in the parties, with independents)
- About (Information about the app, data sources, acknowledgements)



