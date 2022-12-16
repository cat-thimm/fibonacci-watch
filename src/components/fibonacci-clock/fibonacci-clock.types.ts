export enum FibonacciName {
  "First",
  "Second",
  "Third",
  "Forth",
  "Fifth",
}

export interface Fibonacci {
  name: FibonacciName;
  value: number;
}

export interface TimeStamp {
  hours: number;
  minutes: number;
}
