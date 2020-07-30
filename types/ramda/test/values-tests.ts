import * as R from 'ramda';

() => {
  interface A {
    a: string;
    b: string;
  }
  const a1: A = { a: 'something', b: 'else' };
  const v1 = R.values(a1);

  const a = R.values({ a: 1, b: 2, c: 3 }); // => [1, 2, 3] (number[])
  const addition = a[0] + a[1];

  const b = R.values({ a: 1, b: 'something' }); // b = (string|number)[]
  const c = R.values({ 1: 3 });
  // const d = R.values('something');
};
