function VehicleConstructor(name, wheels, passengers, speed, noise){
	if(!(this instanceof VehicleConstructor)){
		return new VehicleConstructor(name, wheels, passengers, speed, noise)
	}
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		console.log(distance_travelled += speed);
	}
	this.name = name;
	this.numberWheels = wheels;
	this.numberPassengers  = passengers;
	this.noise = noise;
	this.speed = speed;
	this.makeNoise = function(){
		console.log(noise);
	};
	this.move = function(){
		updateDistanceTravelled();
		this.makeNoise();
	};
	this.checkMiles = function(){
		console.log(distance_travelled);
	}
	return this;
}
var bike = new VehicleConstructor('bike',2,1, 10,'ring ring!');
bike.makeNoise();
bike.move();
bike.checkMiles();
// var sedan = new VehicleConstructor('sedan',2,5,20, 'honk honk!');
// sedan.makeNoise();
// sedan.move();
// sedan.checkMiles();
// var bus = new VehicleConstructor('bus',8,0,15, 'honk honk!');
// bus.makeNoise();
// bus.move();
// bus.checkMiles();
// bus.countPassengers = function(num){
// 	bus.numberPassengers += num;
// 	console.log(bus.numberPassengers);
// }

// bus.countPassengers(14);
