import { Injectable } from '@angular/core';
import { LoadingZone } from '../classes/loading-zone';

@Injectable({
  providedIn: 'root'
})
export class ProgressHistoryService {
  private entries: LoadingZone[];
  constructor() {
    this.entries = [];
  }
  getRecentEntries(): LoadingZone[] {
    if (this.entries.length <= 5) {
      return this.entries;
    }
    return this.entries.slice(this.entries.length - 5);
  }
  addEntry(loadingZone: LoadingZone): void {
    this.entries.push(loadingZone);
  }
}
