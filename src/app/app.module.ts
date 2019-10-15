import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServersComponent } from './servers/servers.component';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
