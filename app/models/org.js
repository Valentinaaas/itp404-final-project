import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  website: DS.attr('string'),
  mission: DS.attr('string'),
  liked: DS.attr('boolean'),
});
