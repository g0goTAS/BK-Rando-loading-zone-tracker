import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LevelComponent } from './components/level/level.component';
import { LevelSectionComponent } from './components/level-section/level-section.component';
import { LoadingZoneComponent } from './components/loading-zone/loading-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    LevelSectionComponent,
    LoadingZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
