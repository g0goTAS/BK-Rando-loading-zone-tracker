import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Level } from '../classes/level';
import { LevelSection } from '../classes/level-section';
import { LoadingZone } from '../classes/loading-zone';

@Injectable({
  providedIn: 'root'
})
export class LoadingZoneLoaderService {
  levels: Level[];
  constructor(private httpClient: HttpClient) {
    this.levels = [];
    this.httpClient.get('assets/loading-zones.txt', {responseType: 'text'})
    .subscribe(data => {
      let currLevel: Level;
      let currentSection: LevelSection;
      const lines = data.split('\n');
      lines.forEach(line => {
        line = line.trim();
        console.log(line);
        if (line.includes('--')) {
          currentSection.loadingZones.push(new LoadingZone(line.substr(2)));
        }
        else if (line.includes('-')) {
          if (currentSection) {
            currLevel.sections.push(currentSection);
          }
          currentSection = new LevelSection(line.substr(1));
        }
        else {
          if (currLevel) {
            this.levels.push(currLevel);
          }
          currLevel = new Level(line);
          currentSection = undefined;
        }
      });
    });
  }
}
