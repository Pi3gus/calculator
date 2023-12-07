const sum = function(array) {
	return array.reduce((total, current) => total + current,);
};

const subtract = function(array) {
	return array.reduce((total, current) => total - current,);
};

const multiply = function(array) {
    return array.length
    ? array.reduce((total, current) => total * current,)
    : 0;
};

const dividing = function(array) {
    return array.length
    ? array.reduce((total, current) => total / current,)
    : 0;
};

function operate(){

};

