import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
  deleteOrg(org){
    let confirmed = window.confirm(
      'Are you sure you want to erase this organization?'
    );
    if ( confirmed ) {
      org.destroyRecord();
    }
  }
}
});
