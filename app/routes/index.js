import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: 'Passion Organizations',
  model(){
    return this.store.findAll('org');
  },
  actions: {
     error(error) {
       this.notifier.error(error);

       return true;
     }
   }
});
