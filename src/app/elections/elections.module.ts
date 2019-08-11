import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionsRoutingModule } from './elections-routing.module';
import { ElectionsComponent } from './elections.component';
import { ElectionListComponent } from './election-list/election-list.component';
import { ElectionComponent } from './election/election.component';
import { AssemblyListComponent } from './assembly-list/assembly-list.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { ElectorateComponent } from './electorate/electorate.component';
import { ElectorateListComponent } from './electorate-list/electorate-list.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyComponent } from './party/party.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ElectionsComponent,
    ElectionListComponent,
    ElectionComponent,
    AssemblyListComponent,
    AssemblyComponent,
    ElectorateComponent,
    ElectorateListComponent,
    PartyListComponent,
    PartyComponent,
    CandidateComponent,
    CandidateListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElectionsRoutingModule
  ]
})
export class ElectionsModule {
}
