import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatchAllComponent } from './catch-all/catch-all.component';
import { ElectionsComponent } from './elections/elections.component';
import { ElectionComponent } from './election/election.component';
import { HousesComponent } from './houses/houses.component';
import { HouseComponent } from './house/house.component';
import { ElectoratesComponent } from './electorates/electorates.component';
import { ElectorateComponent } from './electorate/electorate.component';


const routes: Routes = [
  {path: '', component: ElectionsComponent},
  {path: 'election/:election', component: ElectionComponent},
  {path: 'election/:election/house/:house', component: HouseComponent},
  {path: 'election/:election/house/:house/electorate/:electorate', component: ElectorateComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: CatchAllComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
