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

    $ ng g module Domain
    $ ng g class domain/Election
    $ ng g class domain/Assembly
    $ ng g class domain/Candidate
    $ ng g class domain/Party
    $ ng g service domain/ExternalData
    $ ng g service domain/LocalData
    $ ng g service domain/PdfGenerate

    $ ng g module CoreInterface
    $ ng g component ui-core/Home
    $ ng g component ui-core/About
    $ ng g component ui-core/Election
    $ ng g component ui-core/Assembly
    $ ng g component ui-core/Candidate
    $ ng g component ui-core/Party
    

    

