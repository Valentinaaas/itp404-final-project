import Component from '@ember/component';

export default Component.extend({
  liked: true,
  actions: {
    like(org, newValue){
      org.set('liked', newValue);
      org.save();
    },

    deleteOrg(org){
      let confirmed = window.confirm(
        'Are you sure you want to delete this organization?'
      );
      if ( confirmed ) {
        org.destroyRecord();
      }
    }
  }
});
