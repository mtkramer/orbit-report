export class Satellite {
    name: string;
    type: string;
    orbitType: string;
    launchDate: string;
    operational: boolean;

    constructor(name: string, type: string, orbitType: string, launchDate: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.orbitType = orbitType;
        this.launchDate = launchDate;
        this.operational = operational;
    }

}
