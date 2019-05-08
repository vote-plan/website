import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ElectionModule } from './election/election.module';
import { AboutComponent } from './about/about.component';
import { CatchAllComponent } from './catch-all/catch-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CatchAllComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    ElectionModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
