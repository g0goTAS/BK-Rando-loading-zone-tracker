import { Progress } from '../enum/progress.enum';

export class LoadingZone {
    id: number;
    name: string;
    progress: Progress;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.progress = Progress.UNEXPLORED;
    }
}
