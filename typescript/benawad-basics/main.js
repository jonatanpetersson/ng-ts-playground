"use strict";
exports.__esModule = true;
// compiling and variables
var bob = "hey, I'm Bob.";
var bob2 = function () { };
var a = 5.324;
var b = 5.324;
var obj = {
    x: true,
    y: 'hi',
    z: [1, 3, 5],
    xx: 3.12
};
obj.x = false;
obj.xy = 'ts';
console.log(obj);
// functions
var add = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; };
var add3 = function (nums) { return nums.a + nums.b; };
// unions
var maybeNum = 5;
maybeNum = 'five';
maybeNum = add;
;
;
var catDog = {
    bark: 'WRaff!',
    purr: 'Rawr'
};
var dogCat = {
    bark: 'Woff!',
    purr: 'Prrrr'
};
dogCat = 5;
if (typeof dogCat === 'boolean') {
    console.log('you are a boolean');
}
;
// casting
add(dogCat, dogCat);
// any
var doesAnything = function (x) {
    console.log(x);
};
doesAnything(['passing', { i: 'n' }, 'whatever', 1, 'want']);
