import { LevelSection } from './level-section';

export class Level {
    name: string;
    sections: LevelSection[];
    constructor(name: string){
        this.name = name;
        this.sections = [];
    }
}
