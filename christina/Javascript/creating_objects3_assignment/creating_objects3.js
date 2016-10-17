function VehicleConstructor(name, wheels, passengers, speed, noise){
	if(!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, wheels, passengers, speed, noise)
	}
	var char = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	this.distance_travelled = 0;
	this.name = name;
	this.numberWheels = wheels;
	this.numberPassengers  = passengers;
	this.noise = noise;
	this.speed = speed;
	this.vin = generateVIN();

	function generateVIN(){
		var vin = '';
		for(var i = 0; i<17; i++){
			vin += char[Math.floor(Math.random()*36)];
		}
		return vin;
	}

}
VehicleConstructor.prototype.makeNoise = function(){
	console.log(this.noise);
	return this;
}
VehicleConstructor.prototype.move = function(){
	this.updateDistanceTravelled();
	this.makeNoise();
	return this;
}
VehicleConstructor.prototype.updateDistanceTravelled =function(){
	console.log(this.distance_travelled += this.speed);
	return this;
}
VehicleConstructor.prototype.checkMiles = function(){
	console.log(this.distance_travelled);
	return this;
}
var bike = new VehicleConstructor('bike',2,1, 10,'ring ring!');
console.log(bike);
bike.makeNoise().move().checkMiles();
console.log(bike.vin);
var sedan = new VehicleConstructor('sedan',2,5,20, 'honk honk!');
sedan.makeNoise().move().checkMiles();
console.log(sedan.vin);
var bus = new VehicleConstructor('bus',8,0,15, 'honk honk!');
bus.makeNoise().move().checkMiles();;
bus.countPassengers = function(num){
	bus.numberPassengers += num;
	console.log(bus.numberPassengers);
}

bus.countPassengers(14);
