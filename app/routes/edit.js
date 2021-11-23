import Route from '@ember/routing/route';

export default class EditRoute extends Route {

    async model({ id }) {
        const response = await fetch('http://localhost:3000/books/${id}');
        return response.json();
    }

}