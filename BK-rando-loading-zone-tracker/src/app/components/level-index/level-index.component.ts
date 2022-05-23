import { Component, OnInit } from '@angular/core';
import { LoadingZoneLoaderService } from 'src/app/services/loading-zone-loader.service';

@Component({
  selector: 'app-level-index',
  templateUrl: './level-index.component.html',
  styleUrls: ['./level-index.component.css']
})
export class LevelIndexComponent {

  constructor(public loader: LoadingZoneLoaderService) { }
  click(levelAccronym: string) {
    const targetHeight = document.getElementById(levelAccronym).getBoundingClientRect().top + window.pageYOffset - 253;
    window.scrollTo({top: targetHeight });
  }
}
