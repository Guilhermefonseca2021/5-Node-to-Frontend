import config from "./config.json" assert { type: "json" };
import Service from "./service.js";

const service = new Service({
  url: config.url,
});

// do not need use anymore clusure to load in javascript, by default escmascript modules already use.
;(async () => {});
const result = await service.getCharacters({ skip: 0, limit: 0 });

console.log("carregou!", result);
