import Controller from "./controller.js";
import config from "./config.json" assert { type: "json" };
import Service from "./service.js";
import View from "./view.js";

// nao dependemos da face completa.
await Controller.initialize({
  service: new Service({
    url: config.url,
  }),
  view: new View(),
});
