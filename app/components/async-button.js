import Component from '@ember/component';

export default Component.extend({
 attributeBindings: ['isPending:disabled'],

 isPending: false,

 init() {
   this._super(...arguments);
   this.set('buttonText', this.defaultText);
 },

 click() {
   this.set('isPending', true);
   this.set('buttonText', this.pendingText);
 }
});
