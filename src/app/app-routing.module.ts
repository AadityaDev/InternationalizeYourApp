import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
// const routes: Routes = [
  // {'path':'', 'redirectTo':'/home', 'pathMatch':'full'},
  // {'path':'home', 'component':HomeComponent},
  // {'path':'home/details/:cityid', 'component':CountryDetailComponent},
  // {'path':'home/explore/:cityid/:cafeid', 'component':ExploreListComponent}
// ]
const routes: Routes = [
  {'path':'', 'redirectTo':'/home', 'pathMatch':'full'}
]