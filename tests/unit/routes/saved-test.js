import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | saved', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:saved');
    assert.ok(route);
  });
});
