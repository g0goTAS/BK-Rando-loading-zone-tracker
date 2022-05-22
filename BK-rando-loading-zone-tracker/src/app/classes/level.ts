import { LevelSection } from './level-section';

export class Level {
    name: string;
    accronym: string;
    sections: LevelSection[];
    constructor(name: string, accronym: string) {
        this.name = name;
        this.accronym = accronym;
        this.sections = [];
    }
}
