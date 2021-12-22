// define file as module to avoid "Cannot redeclare block-scoped variable" error
export {};

// compiling and variables
const bob = `hey, I'm Bob.`;
const bob2 = () => {};
const a = 5.324;
const b: number = 5.324;

interface myObj {
  x: boolean;
  y: string;
  z: number[];
  xx: number;
  xy?: string
}

const obj: myObj = {
  x: true,
  y: 'hi',
  z: [1, 3, 5],
  xx: 3.12
};

obj.x = false;
obj.xy = 'ts';

console.log(obj)

// functions
const add = (x: number, y: number) => x + y;

type AddFunc = (x: number, y: number) => number;
const add2: AddFunc = (x, y) => x + y;
const add3 = (nums: { a: number, b: number }) => nums.a + nums.b;

// unions
let maybeNum: number | string | AddFunc = 5;
maybeNum = 'five';
maybeNum = add;

interface Dog {
  bark: string
};

interface Cat {
  purr: string
};

const catDog: Cat & Dog = {
  bark: 'WRaff!',
  purr: 'Rawr'
}

type DogCat = Dog & Cat | boolean | number;
let dogCat: DogCat = {
  bark: 'Woff!',
  purr: 'Prrrr'
};

dogCat = 5;

if (typeof dogCat === 'boolean') {
  console.log('you are a boolean');
};

// casting
add(dogCat as number, dogCat as number);

// any
const doesAnything = (x: any) => {
  console.log(x);
};

doesAnything(['passing', {i:'n'}, 'whatever', 1, 'want']);