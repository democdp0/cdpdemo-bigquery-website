import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudienceViewComponent } from './audience-view/audience-view.component';
import { DataComponent } from './data/data.component';
import { GoldenrecordComponent } from './goldenrecord/goldenrecord.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DataComponent },
  { path: 'goldenrecord/:id', component: GoldenrecordComponent },
  { path: 'audience/:id', component: AudienceViewComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
