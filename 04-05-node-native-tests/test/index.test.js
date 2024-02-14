import { describe, it } from "node:test";
import { deepStrictEqual, CallTracker } from "node:assert";
import Controller from "./../src/controller.js";

const tracker = new CallTracker();
process.on("exit", () => tracker.verify());

//  objetivo do mock é o principio de que ja obtemos api sem precisar bater nela para testar.
const mockedData = [
  {
    name: "morty smith",
    image: "https://",
    age: 30,
    birthDay: new Date(),
  },
  {
    name: "pickle rick",
    image: "https://",
    age: 30,
    birthDay: new Date(),
  },
];
describe("Unit test for frontend", () => {
  it(
    "should add a property if name contains smith and remove all props",
    { todo: true },
    () => {
      const expected = [
        {
          name: "morty smith",
          image: "https://",
          isBold: true,
        },
        {
          name: "pickle rick",
          image: "https://",
          isBold: false,
        },
      ];
      const controller = new Controller({
        service: {},
        view: {},
      });

      const result = controller.prepareItems(mockedData);
      deepStrictEqual(result, expected);
      console.log(result);
    }
  );
  it("should verify either all functions were called property", async () => {
    const globalObject = {
      document: {
        querySelector: tracker.calls(() => {
            
        })
      },
    };
    const controller = new Controller({
      service: {},
      view: {},
    });
  });
});
