import { describe, it, before, after, beforeEach, mock } from "node:test";
import { deepStrictEqual } from "node:assert";
import { setTimeout } from "node:timers/promises";

function sum(x, y) {
  return x + y;
}

class Timer {
  async delay() {
    await setTimeout(1000)
  }

  async sumDelayed(x, y, callback) {
    // setTimeout(() => {
    //   callback(null, sum(x, y)); // 1- valor inicial, 2- funcao.
    // }, 1000);
    // or await setTimeout(1000)
    await this.delay
    return sum(x, y);
  }
}

function timer(x, y, callback) {
  // ...
}

describe("Using Node.js only", () => {
  beforeEach(() => {
    console.log("rodar antes de cada teste!");
  });

  before(() => console.log("rodar antes do proximo teste!"));
  it("it should sum two valures", () => {
    const expected = 10;
    const current = sum(5, 5);
    deepStrictEqual(current, expected);
  });

  it.skip("it should sum three values");
  it.todo("it should sum two values", { only: true });

  it("it should sum values after a second", () => {
    const timer = {
      async delay() {
        await setTimeout(1000)
      },
      async sumDelayed(x, y, callback) {
        await timer.delay
        return sum(x, y);
      }
    };
    
    mock.method(timer, timer.delay.name);

    const result = timer.sumDelayed(4, 5);
    console.log("excected!!", result);
  });
});
