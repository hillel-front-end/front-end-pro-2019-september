class Car {
    constructor(maxSpeed, type = "limusine"){
        this._maxSpeed = maxSpeed;
        this.type = type;
    }
    drive(){
        console.log('drive');
    }

    setMaxSpeed(speed = 0){
        this._maxSpeed = speed <= 0 ? 0 : speed;
    }

    getMaxSpeed(){
        if(!this._maxSpeed) {
            this.setMaxSpeed(DEFAULT_MAX_SPEED)
        }

        return this._maxSpeed;
    }

    toString(){
        // console.log('my to string', this);

        return this.getMaxSpeed() + 'km/h';
    }
}

class Audi extends Car{
    constructor(year, maxSpeed, type){
        super(maxSpeed, type);
        this.year = year;
    }

    drive(){}

    example(){}
}

class VW extends Car{
    constructor(name, maxSpeed, type){
        super(maxSpeed, type);
        this.name = name;
    }
}


var car = new Audi(2016, 210, 'hatch');
// car.setMaxSpeed(170);
console.log(car);

console.log(car + '!');
document.write(car);

