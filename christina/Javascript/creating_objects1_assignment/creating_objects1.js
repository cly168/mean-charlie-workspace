function VehicleConstructor(name, wheels, passengers, noise){
	var vehicle = {};

	vehicle.name = name;
	vehicle.numberWheels = wheels;
	vehicle.numberPassengers  = passengers;
	vehicle.noise = noise;
	vehicle.makeNoise = function(){
		console.log(vehicle.noise);
	}
	return vehicle;
}

var bike = VehicleConstructor('bike',2,1, 'ring ring!');
bike.makeNoise();
var sedan = VehicleConstructor('sedan',2,5, 'honk honk!');
sedan.makeNoise();
var bus = VehicleConstructor('bus',8,0, 'honk honk!');
bus.makeNoise();

bus.countPassengers = function(num){
	bus.numberPassengers += num;
	console.log(bus.numberPassengers);
}

bus.countPassengers(14);