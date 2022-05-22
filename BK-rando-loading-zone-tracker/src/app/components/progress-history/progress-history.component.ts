import { Component } from '@angular/core';
import { LoadingZone } from 'src/app/classes/loading-zone';
import { LoadingZoneLoaderService } from 'src/app/services/loading-zone-loader.service';
import { ProgressHistoryService } from 'src/app/services/progress-history.service';

@Component({
  selector: 'app-progress-history',
  templateUrl: './progress-history.component.html',
  styleUrls: ['./progress-history.component.css']
})
export class ProgressHistoryComponent {

  constructor(private historyService: ProgressHistoryService, public loader: LoadingZoneLoaderService) { }
  getEntries(): LoadingZone[] {
    return this.historyService.getRecentEntries();
  }
}
