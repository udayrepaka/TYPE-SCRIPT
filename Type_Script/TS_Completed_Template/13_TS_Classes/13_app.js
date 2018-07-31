var Car = (function () {
    function Car(model, yearOfMfg, hasAirBags, mileage) {
        this._model = model;
        this._yearOfMfg = yearOfMfg;
        this._hasAirBags = hasAirBags;
        this._mileage = mileage;
    }
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "yearOfMfg", {
        get: function () {
            return this._yearOfMfg;
        },
        set: function (value) {
            this._yearOfMfg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "hasAirBags", {
        get: function () {
            return this._hasAirBags;
        },
        set: function (value) {
            this._hasAirBags = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        set: function (value) {
            this._mileage = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.specification = function () {
        var details = "Model : " + this.model + "\n                       Year of Mfg :" + this.yearOfMfg + "\n                       Has AirBAgs : " + this.hasAirBags + "\n                       Mileage :" + this.mileage;
        return details;
    };
    return Car;
}());
var car = new Car('BWM', 2018, true, '100Kmph');
var specification = car.specification();
console.log(specification);
// Create a simple class and usage
// add a constructor to a class
// add methods to a class
// add getter and setter methods of a class
// Implement an interface and methods and variables of interface 
