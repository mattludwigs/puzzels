/* eslint-disable no-console */
// https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

import { range, compose, concatUnq, sum } from '../utils';

const isMulitpleOf = (x) => {
  return y => {
    if (y >= x) {
      return y % x === 0;
    }
  }
}

const getMulitples = (fn) => {
  return range => {
    return range.filter(fn);
  }
}

const getMulitpleOf3 = compose(getMulitples(isMulitpleOf(3)), range);
const getMulitpleOf5 = compose(getMulitples(isMulitpleOf(5)), range);

console.log(sum(concatUnq(getMulitpleOf3(1000), getMulitpleOf5(1000))));

/**

real  0m1.305s
user  0m0.996s
sys 0m0.181s

*/


