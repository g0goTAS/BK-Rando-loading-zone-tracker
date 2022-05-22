import { HostListener } from '@angular/core';
import { Component, Input } from '@angular/core';
import { LoadingZone } from 'src/app/classes/loading-zone';
import { Progress } from 'src/app/enum/progress.enum';
import { LoadingZoneLoaderService } from 'src/app/services/loading-zone-loader.service';
import { ProgressHistoryService } from 'src/app/services/progress-history.service';

@Component({
  selector: 'app-loading-zone',
  templateUrl: './loading-zone.component.html',
  styleUrls: ['./loading-zone.component.css']
})
export class LoadingZoneComponent {

  constructor(private loader: LoadingZoneLoaderService, private progressHistoryService: ProgressHistoryService) {}
  @Input() loadingZone: LoadingZone;

  @HostListener('click')
  click() {
    this.loader.updateProgress(this.loadingZone.id, this.loadingZone.progress === Progress.MARKED ? Progress.UNEXPLORED : Progress.MARKED);
    this.progressHistoryService.addEntry(this.loadingZone);
  }

  @HostListener('contextmenu')
  contextMenu(): boolean {
    this.loader.updateProgress(
      this.loadingZone.id, this.loadingZone.progress === Progress.EXPLORED ? Progress.UNEXPLORED : Progress.EXPLORED);
    this.progressHistoryService.addEntry(this.loadingZone);
    return false;
  }
}
