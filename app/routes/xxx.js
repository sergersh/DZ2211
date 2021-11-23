import Route from '@ember/routing/route';

export default class XxxRoute extends Route {
  async model() {
    const response = await fetch('http://localhost:3000/books');
    return response.json();
  }
}
