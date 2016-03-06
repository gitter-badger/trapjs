var variabl = 0

var write = function(text) {
    console.log(text);
};

var alert = function(text) {
    alert(text);
};

var ask = function(text) {
    confirm(text);
};

var today = function() {
    Date();
};

var increaseVarUntil = function(condition, variable) {
    while(condition = false) {
        variable++;
    }
};
increaseVarUntil(variabl = 3, variabl);
write(variabl);