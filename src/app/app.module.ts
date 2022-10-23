import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';
import { AboutMeViewComponent } from './view/about-me-view/about-me-view.component';
import { ResumeViewComponent } from './view/resume-view/resume-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuViewComponent,
    AboutMeViewComponent,
    ResumeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
