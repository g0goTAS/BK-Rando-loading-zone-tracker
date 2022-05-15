import { Progress } from '../enum/progress.enum';

export class LoadingZone {
    name: string;
    progress: Progress;
    constructor(name: string) {
        this.name = name;
        this.progress = Progress.UNEXPLORED;
    }
}
