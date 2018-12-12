import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('org', { path:'/orgs/:id' });
  this.route('create', { path:'/orgs/new' });
  this.route('edit', { path:'orgs/:id/edit' });
  this.route('saved');
  this.route('loading');
  this.route('error');
  this.route('application-loading');
  this.route('application-error');
});

export default Router;
