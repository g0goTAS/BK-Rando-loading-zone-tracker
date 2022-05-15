import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { LevelSection } from 'src/app/classes/level-section';

@Component({
  selector: 'app-level-section',
  templateUrl: './level-section.component.html',
  styleUrls: ['./level-section.component.css']
})
export class LevelSectionComponent {
  @Input() section: LevelSection;
}
