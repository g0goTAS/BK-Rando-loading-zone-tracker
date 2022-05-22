import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LevelComponent } from './components/level/level.component';
import { LevelSectionComponent } from './components/level-section/level-section.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingZoneComponent } from './components/loading-zone/loading-zone.component';
import { TotalProgressComponent } from './components/total-progress/total-progress.component';
import { ProgressHistoryComponent } from './components/progress-history/progress-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    LevelSectionComponent,
    LoadingZoneComponent,
    TotalProgressComponent,
    ProgressHistoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
