import { useState, useEffect } from "react";

import {
  determineBlueFields,
  determineGreenFields,
  determineRedFields,
  fib1,
  fib2,
  fib3,
  fib4,
  fib5,
  getCurrentTimeStamp,
  hasElementInFields,
} from "./fibonacci-clock.helper";
import {
  Column,
  FifthField,
  FirstField,
  ForthField,
  Row,
  SecondField,
  ThirdField,
} from "./fibonacci-clock.styles";
import { Fibonacci, TimeStamp } from "./fibonacci-clock.types";

const intervalInMS = 300000;

export default function FibonacciClock() {
  const [redFields, setRedFields] = useState<Fibonacci[]>([]);

  const [greenFields, setGreenFields] = useState<Fibonacci[]>([]);

  const [blueFields, setBlueFields] = useState<Fibonacci[]>([]);

  const [timeStamp, setTimeStamp] = useState<TimeStamp>();

  useEffect(() => {
    startFibonacciWatch();
    const interval = setInterval(() => {
      startFibonacciWatch();
    }, intervalInMS);

    return () => clearInterval(interval);
  }, []);

  function onDetermineFields(time: TimeStamp): void {
    const redFields = determineRedFields(time.hours);
    const greenFields = determineGreenFields(time.minutes);
    const blueFields = determineBlueFields(redFields, greenFields);

    setRedFields(redFields);
    setGreenFields(greenFields);
    setBlueFields(blueFields);
  }

  function startFibonacciWatch(): void {
    const currentTimeStamp = getCurrentTimeStamp();

    // const currentTimeStamp = { hours: 9, minutes: 25 };
    setTimeStamp(currentTimeStamp);
    onDetermineFields(currentTimeStamp);
  }

  return (
    <>
      <h2>
        {timeStamp
          ? "The time is " + timeStamp?.hours + ":" + timeStamp?.minutes
          : "Time will be set soon."}
      </h2>

      <Row>
        <Column>
          <Row>
            <ThirdField
              red={hasElementInFields(fib3, redFields)}
              green={hasElementInFields(fib3, greenFields)}
              blue={hasElementInFields(fib3, blueFields)}
            />
            <Column>
              <FirstField
                red={hasElementInFields(fib1, redFields)}
                green={hasElementInFields(fib1, greenFields)}
                blue={hasElementInFields(fib1, blueFields)}
              />
              <SecondField
                red={hasElementInFields(fib2, redFields)}
                green={hasElementInFields(fib2, greenFields)}
                blue={hasElementInFields(fib2, blueFields)}
              />
            </Column>
          </Row>
          <ForthField
            red={hasElementInFields(fib4, redFields)}
            green={hasElementInFields(fib4, greenFields)}
            blue={hasElementInFields(fib4, blueFields)}
          />
        </Column>
        <FifthField
          red={hasElementInFields(fib5, redFields)}
          green={hasElementInFields(fib5, greenFields)}
          blue={hasElementInFields(fib5, blueFields)}
        />
      </Row>
    </>
  );
}
