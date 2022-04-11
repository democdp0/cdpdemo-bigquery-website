import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { GoldenrecordComponent } from './goldenrecord/goldenrecord.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoldenrecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
