# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Development

Developing in Windows is flaky and useless, so will need to use a Virtual Machine.

## Build command

    $ ng build vote-plan --aot  --optimization --output-path ../vote-plan.github.io/build --prod --progress --extract-licenses --vendor-chunk

## Generate Commands Used

    $ ng g module elections/elections --module app --flat --routing
    $ ng g component page-not-found
    $ ng g component about
    $ ng g component home
    $ ng g component elections/elections
    $ ng g component elections/election-list
    $ ng g component elections/election
    $ ng g component elections/assembly-list
    $ ng g component elections/assembly
    $ ng g component elections/electorate
    $ ng g component elections/electorate-list
    $ ng g component elections/party-list
    $ ng g component elections/party
    $ ng g component elections/candidate
    $ ng g component elections/candidate-list
    
    $ ng g class domain/Election
    $ ng g class domain/Assembly
    $ ng g class domain/electorate
    $ ng g class domain/party
    $ ng g class domain/candidate
    
    $ ng g service domain/domain
    
    $ ng g component shared/app-navbar
    $ ng g component shared/app-breadcrumb
