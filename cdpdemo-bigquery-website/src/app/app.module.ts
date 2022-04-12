import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import { GoldenrecordComponent } from './goldenrecord/goldenrecord.component';
import { DataComponent } from './data/data.component';
import { CustomMaterialModule } from './core/custom-material-module.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
	url: "https://api.cdpdemodashboard.tk", // socket server url;
	options: {
		transports: ['websocket']
	}
}
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
    SocketIoModule.forRoot(config)
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
