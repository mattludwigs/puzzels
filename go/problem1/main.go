// https://projecteuler.net/problem=1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

package main

import (
  "fmt"
  "math"
)

var max int = 1000

func main() {
  multiples := []int{}

  for i := 1; i < max; i++ {
    if (math.Mod(float64(i), 3) == 0 || math.Mod(float64(i),5) == 0) {
      multiples = append(multiples, i)
    }
  }

  fmt.Println(add(multiples))
}

func add(xs []int) int {
  total := 0;

  for _, x := range xs {
    total += x;
  }

  return total;
}

/**

real  0m0.255s
user  0m0.317s
sys 0m0.058s

*/
