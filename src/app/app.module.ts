import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ToolsbarComponent } from './toolsbar/toolsbar.component';
import { ResComponent } from './res/res.component';





@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FooterComponent,
    LinksComponent,
    TerminalComponent,
    ToolsbarComponent,
    ResComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
