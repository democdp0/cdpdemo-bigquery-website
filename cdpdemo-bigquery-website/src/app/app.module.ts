import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { GoldenrecordComponent } from './goldenrecord/goldenrecord.component';
import { DataComponent } from './data/data.component';
import { CustomMaterialModule } from './core/custom-material-module.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoldenrecordComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomMaterialModule, 
    BrowserAnimationsModule
    
  ],
  providers: [RestService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
