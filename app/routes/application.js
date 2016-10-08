import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin';

const { Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    login () {
      var lockOptions = {
        auth: {
          params: { scope: 'openid' }
        }
      };
      this.get('session').authenticate('authenticator:auth0-lock', lockOptions);
    },

    logout () {
      this.get('session').invalidate();
      this.transitionTo('application');
    }
  }
});
