console.log('Lection 11');
var DEFAULT_MAX_SPEED = 190;
function Car (){

}

Car.prototype.drive = function(){
    console.log('drive');
}

Car.prototype.setMaxSpeed = function(speed = 0){
    this._maxSpeed = speed <= 0 ? 0 : speed;
}
Car.prototype.getMaxSpeed = function(){
    if(!this._maxSpeed) {
        this.setMaxSpeed(DEFAULT_MAX_SPEED)
    }

    return this._maxSpeed;
}

function Audi(year) {
    this.year = year;
}
Audi.prototype = Object.create(Car.prototype);

var car = new Audi(2016);
// car.setMaxSpeed(170);
console.log(car, car.getMaxSpeed());