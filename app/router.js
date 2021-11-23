import EmberRouter from '@ember/routing/router';
import config from 'dz2211/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('xxx');
    this.route('edit', { path: '/:id' });
});