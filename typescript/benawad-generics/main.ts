const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
}
const l = last([1, 2, 3]);
const l2 = last(['one', 'two', 'three']);

const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => {
  return [x, y];
};
const v = makeArr(5, 'six');
const v2 = makeArr('five', 'six');
const v3 = makeArr<string | null>(null, 6);

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName
  };
};
const v4 = makeFullName({ firstName: 'Bob', lastName: 'Balboa', age: 15 });

interface Tab<T> {
  id: string,
  position: number,
  data: T
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;
