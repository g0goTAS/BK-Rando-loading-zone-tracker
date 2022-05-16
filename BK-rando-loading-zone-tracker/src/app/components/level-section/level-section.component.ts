import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { LevelSection } from 'src/app/classes/level-section';
import { Progress } from 'src/app/enum/progress.enum';
import { LoadingZoneLoaderService } from 'src/app/services/loading-zone-loader.service';

@Component({
  selector: 'app-level-section',
  templateUrl: './level-section.component.html',
  styleUrls: ['./level-section.component.css']
})
export class LevelSectionComponent {
  @Input() section: LevelSection;

  hasUnknownLoadingZones(): boolean {
    let has = false;
    this.section.loadingZones.forEach(loadingZone => {
      has = loadingZone.progress === Progress.UNEXPLORED || has;
      console.log(has);
    });
    return has;
  }
}
