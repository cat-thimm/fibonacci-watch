import { Fibonacci, FibonacciName, TimeStamp } from "./fibonacci-clock.types";

export const fib1 = {
  name: FibonacciName.First,
  value: 1,
};
export const fib2 = {
  name: FibonacciName.Second,
  value: 1,
};
export const fib3 = {
  name: FibonacciName.Third,
  value: 2,
};
export const fib4 = {
  name: FibonacciName.Forth,
  value: 3,
};
export const fib5 = {
  name: FibonacciName.Fifth,
  value: 5,
};

const fibs: Fibonacci[] = [fib5, fib4, fib3, fib2, fib1];

function removeFields(
  firstArray: Fibonacci[],
  secondArray: Fibonacci[]
): Fibonacci[] {
  let blueFields: Fibonacci[] = [];
  firstArray.forEach((hourField, index) => {
    const sharedField = secondArray.find(
      (minuteField) => minuteField === hourField
    );

    if (sharedField) {
      blueFields.push(sharedField);
      firstArray.splice(index, 1);
      secondArray.splice(index, 1);
    }
  });

  return blueFields;
}

// Method to determine specific fibonacci field for hours or minutes (time)

function determineFields(time: number): Fibonacci[] {
  let usedSquares: Fibonacci[] = [];
  let calcDiff = time;

  fibs.forEach((fib) => {
    const diff = calcDiff - fib.value;

    if (diff >= 0) {
      usedSquares.push(fib);
      calcDiff = diff;
    }
  });

  return usedSquares;
}

// Methods to determine red, green and blue fields

export function determineRedFields(hour: number): Fibonacci[] {
  return determineFields(hour);
}

export function determineGreenFields(minutes: number): Fibonacci[] {
  return determineFields(Math.trunc(minutes / 5));
}

export function determineBlueFields(
  redFields: Fibonacci[],
  greenFields: Fibonacci[]
) {
  let blueFields = [];
  if (redFields.length > greenFields.length) {
    blueFields = removeFields(redFields, greenFields);
  } else {
    blueFields = removeFields(greenFields, redFields);
  }
  return blueFields;
}

// Method to check if red, green or blue fields include a specific fibonacci field

export function hasElementInFields(
  fib: Fibonacci,
  fields: Fibonacci[]
): boolean {
  return fields.some((field) => field === fib);
}

// Method returns specific time stamp in 1-12 hour format

export function getCurrentTimeStamp(): TimeStamp {
  const currentDate = new Date();

  return {
    hours: currentDate.getHours() % 12 || 12,
    minutes: currentDate.getMinutes(),
  };
}
