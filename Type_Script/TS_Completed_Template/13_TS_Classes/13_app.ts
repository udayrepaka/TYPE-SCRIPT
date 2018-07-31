interface Vehicle{
    specification():string;
}
class Car implements Vehicle{
    private _model:string;
    private _yearOfMfg:number;
    private _hasAirBags:boolean;
    private _mileage:string;


    constructor(model: string, yearOfMfg: number, hasAirBags: boolean, mileage: string) {
        this._model = model;
        this._yearOfMfg = yearOfMfg;
        this._hasAirBags = hasAirBags;
        this._mileage = mileage;
    }


    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get yearOfMfg(): number {
        return this._yearOfMfg;
    }

    set yearOfMfg(value: number) {
        this._yearOfMfg = value;
    }

    get hasAirBags(): boolean {
        return this._hasAirBags;
    }

    set hasAirBags(value: boolean) {
        this._hasAirBags = value;
    }

    get mileage(): string {
        return this._mileage;
    }

    set mileage(value: string) {
        this._mileage = value;
    }

    public specification():string{
        let details = `Model : ${this.model}
                       Year of Mfg :${this.yearOfMfg}
                       Has AirBAgs : ${this.hasAirBags}
                       Mileage :${this.mileage}`;
        return details;
    }
}

let car = new Car('BWM',2018,true,'100Kmph');
let specification = car.specification();
console.log(specification);










// Create a simple class and usage

// add a constructor to a class

// add methods to a class

// add getter and setter methods of a class

// Implement an interface and methods and variables of interface