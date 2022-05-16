import { Component, Input } from '@angular/core';
import { Level } from 'src/app/classes/level';
import { Progress } from 'src/app/enum/progress.enum';
import { LoadingZoneLoaderService } from 'src/app/services/loading-zone-loader.service';

@Component({
  selector: 'app-total-progress',
  templateUrl: './total-progress.component.html',
  styleUrls: ['./total-progress.component.css']
})
export class TotalProgressComponent {
  levels: Level[];
  constructor(loader: LoadingZoneLoaderService) {
    this.levels = loader.levels;
  }

  exploredLoads(): number {
    let count = 0;
    this.levels.forEach(level => {
      level.sections.forEach(section => {
        section.loadingZones.forEach(loadingZone => {
          if (loadingZone.progress !== Progress.UNEXPLORED) {
            count += 1;
          }
        });
      });
    });
    return count;
  }

  totalLoads(): number {
    let count = 0;
    this.levels.forEach(level => {
      level.sections.forEach(section => {
        section.loadingZones.forEach(() => {
          count += 1;
        });
      });
    });
    return count;
  }

  progressPercentage(): string {
    return (Math.round(this.exploredLoads() / this.totalLoads() * 100)).toString() + ' %';
  }
}
