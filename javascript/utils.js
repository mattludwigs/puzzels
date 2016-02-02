// Normally I would use Ramda or Lodash here but I wanted to keep this to no libraries

export function compose() {
  const fns = [].slice.call(arguments).reverse();
  return function (x) {
    return fns.reduce((last, current) => current(last), x);
  }
}

// gross range util
  // taken from http://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-an-array-based-on-suppl
export const range = (n) => {
  return Array.apply(null, Array(n)).map(function (_, i) {return i;});
}

export const concatUnq = (a, b) => {
  return a.concat(b.filter(x => {
    return a.indexOf(x) === -1;
  }));
}

export const sum = (xs) => {
  return xs.reduce((x, y) => x + y);
}

