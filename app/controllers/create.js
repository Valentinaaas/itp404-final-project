import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  createOrg(){
    let org = this.store.createRecord('org', {
      name: this.name,
      category: this.category,
      website: this.website,
      mission: this.mission
    });

    org.save().then(() => {
      this.transitionToRoute('org', org.id);
    });
  }
}
});
