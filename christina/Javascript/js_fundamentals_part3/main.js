function personConstructor(name){
	var object;
	object={
		name: name,
		distance_traveled: 0,
		say_name: function(){
			alert(object.name);
		},
		say_something: function(x){
			console.log(object.name,'says', x);			
		},
		walk:function(){
			console.log(object.name, 'is walking');
			object.distance_traveled +=3;
			console.log(object.distance_traveled)
		},
		run:function(){
			console.log(object.name,'is running');
			object.distance_traveled+=10;
			console.log(object.distance_traveled);
		},
		crawl:function(){
			console.log(object.name, 'is crawling');
			object.distance_traveled+=1;
			console.log(object.distance_traveled);
		}
	}
	object.say_something('I am cool');
	object.walk();
	object.run();
	object.crawl();
}
personConstructor('Christina');
//---------------------------------------------------//
function ninjaConstructor(name, dojo){
	object = {
		name: name,
		cohort: dojo,
		belt_level: 'yellow',
		levelUp: function(){
			if(object.belt_level=='yellow'){
				object.belt_level = 'red';
			}
			else if(object.belt_level == 'red'){
				object.belt_level = 'green';
			}
			else if(object.belt_level == 'green'){
				object.belt_level = 'blue';
			}
			else if(object.belt_level =='blue'){
				object.belt_level = 'black';
			}
			console.log(object.name,'at the', object.cohort, 'location got a', object.belt_level,'belt')
		}
	}
	console.log(object.name,'at the', object.cohort, 'location got a', object.belt_level,'belt')
	object.levelUp();
	object.levelUp();
	object.levelUp();
	object.levelUp();

}
ninjaConstructor('Christina','DC')