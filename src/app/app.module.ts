import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './ui-core/home/home.component';
import { AboutComponent } from './ui-core/about/about.component';
import { ElectionComponent } from './ui-core/election/election.component';
import { AssemblyComponent } from './ui-core/assembly/assembly.component';
import { CandidateComponent } from './ui-core/candidate/candidate.component';
import { PartyComponent } from './ui-core/party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ElectionComponent,
    AssemblyComponent,
    CandidateComponent,
    PartyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
