import { Component, Input} from '@angular/core';
import { Level } from 'src/app/classes/level';
import { Progress } from 'src/app/enum/progress.enum';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent {

  @Input() level: Level;

  hasUnknownLoadingZones(): boolean {
    let has = false;
    this.level.sections.forEach(section => {
      section.loadingZones.forEach(loadingZone => {
        has = loadingZone.progress === Progress.UNEXPLORED || has;
      });
    });
    return has;
  }
}
