import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionListComponent } from './election-list/election-list.component';
import { ElectionComponent } from './election/election.component';
import { AssemblyListComponent } from './assembly-list/assembly-list.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { ElectorateComponent } from './electorate/electorate.component';
import { ElectorateListComponent } from './electorate-list/electorate-list.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyComponent } from './party/party.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateComponent } from './candidate/candidate.component';


const routes: Routes = [
  {
    path: 'elections', component: ElectionListComponent, data: {breadcrumbTitle: 'Elections'}, children: [
      {
        path: ':electionName', component: ElectionComponent, data: {breadcrumbTitle: 'Election'}, children: [
          {
            path: 'assemblies', component: AssemblyListComponent, data: {breadcrumbTitle: 'Assemblies'}, children: [
              {
                path: ':assemblyName', component: AssemblyComponent, data: {breadcrumbTitle: 'Assembly'}, children: [
                  {
                    path: 'electorates', component: ElectorateListComponent, data: {breadcrumbTitle: 'Electorates'}, children: [
                      {
                        path: ':electorateName', component: ElectorateComponent, data: {breadcrumbTitle: 'Electorate'}
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: 'candidates', component: CandidateListComponent, data: {breadcrumbTitle: 'Candidates'}, children: [
              {path: ':candidateName', component: CandidateComponent, data: {breadcrumbTitle: 'Candiate'}}
            ]
          },
          {
            path: 'parties', component: PartyListComponent, data: {breadcrumbTitle: 'Parties'}, children: [
              {path: ':partyName', component: PartyComponent, data: {breadcrumbTitle: 'Party'}}
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectionsRoutingModule {
}
