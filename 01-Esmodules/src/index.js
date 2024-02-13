import config from "./config.json" assert { type: "json" };
import Service from "./service.js";

const service = new Service({
  url: config.url,
});

// do not need use anymore clusure to load in javascript, by default escmascript modules already use.
async () => {};
const characters = await service.getCharacters({ skip: 0, limit: 5 });
const boldSmith = (name) => /smith/i.test(name) ? `<strong>${name}</strong>` : name
const htmlEL = characters
  .map((item) => `<li><img width=50px src="${item.image}"/> ${boldSmith(item.name)}</li>`)
  .join("<br>");
  // our tag from index.html
  const output = document.querySelector('#output')
  output.innerHTML = htmlEL
console.log({ result });
