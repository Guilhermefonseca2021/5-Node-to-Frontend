export default class Service {
  constructor({ url }) {
    this.url = url;
  }
  async getCharacters({ skip, limit }) {
    const result = (await fetch(this.url)).json();
    return result;
  }
}
