import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionComponent } from './election/election.component';
import { ElectionsComponent } from './elections/elections.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { HousesComponent } from './houses/houses.component';
import { ElectoratesComponent } from './electorates/electorates.component';
import { ElectionHomeComponent } from './election-home/election-home.component';


const routes: Routes = [
  {
    path: 'election', component: ElectionComponent, children: [
      {path: '', component: ElectionHomeComponent},
      {path: 'candidates', component: CandidatesComponent},
      {path: 'houses', component: HousesComponent},
      {path: 'electorates', component: ElectoratesComponent},
    ]
  },
  {path: 'elections', component: ElectionsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ElectionRoutingModule {
}
