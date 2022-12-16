import {
  determineBlueFields,
  determineGreenFields,
  determineRedFields,
  fib1,
  fib2,
  fib3,
  fib4,
  fib5,
} from "../fibonacci-clock.helper";

describe("Test determination of colors", () => {
  it("should add", () => {
    const timeStamp = { hours: 12, minutes: 47 };

    const redFields = determineRedFields(timeStamp.hours);
    expect(redFields).toEqual([fib5, fib4, fib3, fib2, fib1]);

    const greenFields = determineGreenFields(timeStamp.minutes);
    expect(greenFields).toEqual([fib5, fib4, fib2]);

    const blueFields = determineBlueFields(redFields, greenFields);

    expect(blueFields).toEqual([fib5, fib4, fib2]);
    expect(redFields).toEqual([fib3, fib1]);
    expect(greenFields).toEqual([]);
  });
});

export {};
