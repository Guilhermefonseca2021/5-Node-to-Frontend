// td que é requisicao de server, api de dados colocamos na server.js
export default class Service {
  constructor({ url }) {
    this.url = url;
  }

  async getCharacters({ skip, limit }) {
    if (!localStorage.getItem("characters")) {
    }
    const result = await (await fetch(this.url)).json().results;
    localStorage.setItem("characters", JSON.stringify(result));
    return result.slice(skip, limit);
  }
}
