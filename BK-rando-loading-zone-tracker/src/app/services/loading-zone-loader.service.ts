import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Level } from '../classes/level';
import { LevelSection } from '../classes/level-section';
import { LoadingZone } from '../classes/loading-zone';
import { Progress } from '../enum/progress.enum';

@Injectable({
  providedIn: 'root'
})
export class LoadingZoneLoaderService {
  levels: Level[];
  constructor(private httpClient: HttpClient) {
    this.levels = [];

    let loadingZoneCount = 0;
    this.httpClient.get('assets/loading-zones.txt', {responseType: 'text'})
    .subscribe(data => {
      let currLevel: Level;
      let currentSection: LevelSection;
      const lines = data.split('\n');
      lines.forEach(line => {
        line = line.trim();
        if (line.includes('--')) {
          currentSection.loadingZones.push(new LoadingZone(loadingZoneCount, line.substr(2)));
          loadingZoneCount += 1;
        }
        else if (line.includes('-')) {
          if (currentSection) {
            currLevel.sections.push(currentSection);
          }
          currentSection = new LevelSection(line.substr(1));
        }
        else {
          if (currentSection) {
            currLevel.sections.push(currentSection);
          }
          if (currLevel) {
            this.levels.push(currLevel);
          }
          currLevel = new Level(line);
          currentSection = undefined;
        }
      });
      currLevel.sections.push(currentSection);
      this.levels.push(currLevel);
    });
  }

  updateProgress(id: number, progress: Progress): void {
    this.levels.forEach(level => {
      level.sections.forEach(section => {
        section.loadingZones.forEach(loadingZone => {
          if (loadingZone.id === id) {
            loadingZone.progress = progress;
            return;
          }
        });
      });
    });
  }
}
