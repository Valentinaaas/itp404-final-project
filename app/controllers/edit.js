import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
   editOrg(){
     let org = this.model;
     org.save().then(() => {
       this.transitionToRoute('org', org.id);
     });
   }
 }
});
