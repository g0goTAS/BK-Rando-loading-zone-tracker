import { LoadingZone } from './loading-zone';

export class LevelSection {
    name: string;
    loadingZones: LoadingZone[];
    constructor(name: string) {
        this.name = name;
        this.loadingZones = [];
    }
}
