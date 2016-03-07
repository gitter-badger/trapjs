var testvar = 0

var write = function(text) {
    console.log(text);
};

var notify = function(text) {
    alert(text);
};

var ask = function(text) {
    confirm(text);
};

var today = function() {
    Date();
};

var increaseVarUntil = function(variable, condition) {
    while(condition = false) {
        variable++;
    }
};

var repeat = function(numTimes, {code}) {
    var Times = 0;
    do {
        code;
    } while (Times < numTimes);
};
