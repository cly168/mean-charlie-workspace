var runningLogger;
runningLogger = "I am running!"
console.log(runningLogger)
//------------------------------------//
function multiplyByTen(val){
	if(typeof(val) == "number"){
		var result;
		result = val * 10;
		return result;
	}
}
multiplyByTen(5);
//------------------------------------//
function stringReturnOne(){
	return "stringone"
}
function stringReturnTwo(){
	return "stringtwo"
}
console.log(stringReturnOne());
console.log(stringReturnTwo());
//-----------------------------------//
function caller(val){
	if(typeof(val) == "function"){
		val();
	}
	else{
		return val;
	}
}
console.log(caller('hello'))
//-----------------------------------//
function myDoubleConsoleLog(a,b){
	if (typeof(a) == "function" && typeof(b) == "function"){
		console.log(a,b);
	}
}
myDoubleConsoleLog(caller('hi'), 'apple')
//----------------------------------------------------------//
function caller2(a){
	console.log('starting')
	var b = setTimeout(function(){
		if(typeof(a) == "function"){
		console.log(a());
		}
	},2000);
	console.log('ending?');
	return "interesting";
caller2(myDoubleConsoleLog(caller('hi'), 'apple'))