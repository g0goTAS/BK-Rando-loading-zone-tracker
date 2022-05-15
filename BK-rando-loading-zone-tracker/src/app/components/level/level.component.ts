import { Component, Input, OnInit } from '@angular/core';
import { Level } from 'src/app/classes/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent {

  @Input() level: Level;
}
