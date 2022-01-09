import { Observable } from 'rxjs';
import { map, pluck, filter } from 'rxjs/operators';

const users = {
  data: [
    {
      status: 'active',
      age: 14
    },
    {
      status: 'inactive',
      age: 32
    },
    {
      status: 'active',
      age: 52
    },
    {
      status: 'inactive',
      age: 5
    },
    {
      status: 'active',
      age: 23
    },
    {
      status: 'inactive',
      age: 43
    },
  ],
};

const users2 = {
  data: [
    {
      status: 'active',
      age: 14
    },
    {
      status: 'inactive',
      age: 32
    },
    {
      status: 'active',
      age: 1
    },
    {
      status: 'inactive',
      age: 5
    },
    {
      status: 'active',
      age: 23
    },
    {
      status: 'inactive',
      age: 43
    },
  ],
};

const observable = new Observable(subscriber => {
  subscriber.next(users);
  subscriber.next(users2);
}).pipe(
  pluck('data'),
  filter(value => value.length >= 5),
  map(value => {
    return value.filter(user => user.status === 'active');
  }),
  map(value => {
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map(value => {
    if (value < 18) throw new Error('Average age is too young');
    else return value;
  }),
);
  
const observer = {
  next: value => {
    console.log('Observer got value: '+ value);
  },
  error: err => {
    console.log('Observer got error: ' + err.message);
  },
  complete: () => {
    console.log('Observer got a complete notification')
  },
};

observable.subscribe(observer);