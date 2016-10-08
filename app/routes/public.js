import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route, inject } = Ember;
const { service } = inject;

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  beforeModel() {
    if(this.get('session').get('isAuthenticated')) {
      this.transitionTo('app.home');
    }
  }
});
