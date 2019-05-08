import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatchAllComponent } from './catch-all/catch-all.component';


const routes: Routes = [
  {path: '', redirectTo: '/elections', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: '**', component: CatchAllComponent}
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
export class AppRoutingModule {
}
