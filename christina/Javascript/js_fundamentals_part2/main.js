function problem1(x){
var x;
for(var i = 0; i<x.length; i++){
	console.log(x[i]);
}
x.push(100);
x.push(['hello', 'world','Javascript is Fun']);
console.log(x);
}
console.log(problem1([3,5,'Dojo', 'rocks', 'Michael','Sensei']))
//-----------------------------------------------------------------//
function sum(x){
	var sum = 0;
	for(i=1; i<501; i++){
		sum+=i;
	}
	console.log(sum)
}
sum();
//---------------------------------------------------------------------//
function min(arr){
	var min = arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]< min){
			min = arr[i];
		}
	}
	console.log(min);
}
min([1,5,90,25,-3,0]);	
//--------------------------------------------------------------------//
function avg(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum+=arr[i];
	}			
	var avg = sum/arr.length;
	console.log(avg);
}
avg([1,5,90,25,-3,0]);
//------------------------------------------------------//
function ninja(){
	var new_ninja = {
		name: 'Jessica',
		profession: 'coder',
		favorite_language: 'JavaScript',
		dojo: 'Dallas'
	}
	for(key in new_ninja){
		console.log(key, new_ninja[key])
	}
}
ninja();
//----------------------------------------------------//
function summation(x,y){
	var sum = 0;
	for(i = x; i<y+1; i++){
		sum+=i;
	}
	return sum;
}
summation(1,5);
//---------------------------------------------------//
function minimum(arr){
	var min;
	min = arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i];
		}
	}
	return min;
}
console.log(minimum([1,2,3,4,5]));
//--------------------------------------------------//
function average(arr){
	var sum;
	var avg;
	sum=0;
	for(var i = 0; i<arr.length; i++){
		sum +=arr[i];
	}
	avg = sum/arr.length;
	return avg;
}
console.log(average([1,2,3,4]));
//----------------------------------------------------//
var summation = function(x,y){
	var sum = 0;
	for(i = x; i<y+1; i++){
		sum+=i;
	}
	return sum;
};
//----------------------------------------------------//
var minimum = function(arr){
	var min = arr[0];
	for(var i=0; i<arr.length; i++){
		if(arr[i]<min){
			min=arr[i];
		}
	}
	return min;
};
//---------------------------------------------------//
var average = function(arr){
	var sum=0;
	var avg;
	for(var i =0; i<arr.length; i++){
		sum+=i;
	}
	avg = sum/arr.length;
	return avg;
};
//-----------------------------------------------------//
var object = {
	summation: function(x,y){
		var sum=0;
		for(var i = x; i<y+1; i++){
			sum+=i;
		}
		return sum;
	},
	minimum:function(arr){
		var min=arr[0];
		for(var i=0; i<arr.length;i++){
			if(arr[i]<min){
				min=arr[i];
			}
		}
		return min;
	},
	average:function(arr){
		var sum=0;
		var avg;
		for(var i =0; i<arr.length; i++){
			sum+=i;
		}
		avg = sum/arr.length;
		return avg;
	}
}
//------------------------------------------------//
var person = {
	name: 'Christina',
	distance_traveled:'0',
	say_name: function(){
		console.log(person.name);
	},
	say_something: function(x){
		console.log(person.name, 'says', x)
	},
	walk: function(){
		console.log(person.name, "is walking");
		person.distance_traveled+=3;
		return person;		
	},
	run: function(){
		console.log(person.name, 'is running');
		person.distance_traveled +=10;
		return person;		
	},
	crawl: function(){
		console.log(person.name, 'is crawling');
		person.distance_traveled +=1;
		return person;
	}
}

person.say_something('hello');
person.walk();
person.run();
person.crawl();