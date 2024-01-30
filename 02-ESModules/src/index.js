// import config from "./config.json" assert { type: "json" };
import api from "./api";
import Service from "./service";

const service = new Service({
  url: api.url,
});

const result = await service.getCharacters({ skip: 0, limit: 5 });

const htmlEl = characs.map(item => `<li><img width=50 src="${item.image}"</li>`)
console.log({ result });
