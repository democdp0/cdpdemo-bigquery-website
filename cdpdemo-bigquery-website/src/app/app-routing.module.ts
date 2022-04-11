import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoldenrecordComponent } from './goldenrecord/goldenrecord.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'goldenrecord', component: GoldenrecordComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
