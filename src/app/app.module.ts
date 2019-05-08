import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { CatchAllComponent } from './catch-all/catch-all.component';
import { ElectionsComponent } from './elections/elections.component';
import { ElectionComponent } from './election/election.component';
import { HouseComponent } from './house/house.component';
import { HousesComponent } from './houses/houses.component';
import { ElectoratesComponent } from './electorates/electorates.component';
import { ElectorateComponent } from './electorate/electorate.component';
import { CandidateComponent } from './candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatchAllComponent,
    ElectionsComponent,
    ElectionComponent,
    HouseComponent,
    HousesComponent,
    ElectoratesComponent,
    ElectorateComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
