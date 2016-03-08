var testvar = 0

var write = function(text) {
    console.log(text);
};

var notify = function(text) {
    alert(text);
};

var ask = function(text) {
    return confirm(text);
};

var today = function() {
    return Date();
};

/*
var increaseVarUntil = function(variable, conditionFunc) {
    while(!conditionFunc()) {
        variable++;
    }
};
*/
/* I can't really see why the above is needed. A while loop would be better, I'd say.
   I fixed your code though. If you pass a boolean (e.g x < 4) to a function, that boolean will never change, even if x is now bigger
   than 4. The only way would be to pass a function that returns a boolean, so it'd be run like this: 
   increaseVarUntil(x, function() { return x < 4 }). Hopefully you understand! */

var repeatUntil = function(conditionFunc, code) {
  while(!conditionFunc()) {
    code();
  }
}
// To make it have the same effect as increaseVarUntil, you'd run it like this: repeatUntil(function() { x < 4 }, function() { x++; })

var repeat = function(numTimes, code) {
    var Times = 0;
    while(Times < numTimes) {
        code(Times);
        Times++;
    }
};
