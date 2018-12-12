import Route from '@ember/routing/route';
import { makeArray } from '@ember/array';

export default Route.extend({
  title: function(tokens) {
   tokens = makeArray(tokens);
   tokens.unshift('passion org');
   return tokens.reverse().join('-');
 },
 // model() {
 //   return new Ember.RSVP.Promise(function(resolve, reject) {
 //     setTimeout(resolve);
 //   });
 // }
});
