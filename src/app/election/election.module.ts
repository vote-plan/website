import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ElectionRoutingModule } from './election-routing.module';

import { ElectionsComponent } from './elections/elections.component';
import { ElectionComponent } from './election/election.component';
import { HousesComponent } from './houses/houses.component';
import { HouseComponent } from './house/house.component';
import { ElectorateComponent } from './electorate/electorate.component';
import { ElectoratesComponent } from './electorates/electorates.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { ElectionHomeComponent } from './election-home/election-home.component';

@NgModule({
  declarations: [
    ElectionsComponent,
    ElectionComponent,
    HousesComponent,
    HouseComponent,
    ElectoratesComponent,
    ElectorateComponent,
    CandidatesComponent,
    CandidateComponent,
    ElectionHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ElectionRoutingModule,
  ]
})
export class ElectionModule {
}
