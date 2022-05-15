import { Component } from '@angular/core';
import { LoadingZoneLoaderService } from './services/loading-zone-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BK-rando-loading-zone-tracker';
  constructor(public loadingZoneLoaderService: LoadingZoneLoaderService) {}
  getLevels() {
    return this.loadingZoneLoaderService.levels;
  }
}
