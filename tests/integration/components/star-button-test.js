import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('filled star when liked', async function(assert) {
    this.set('liked', true);
    await render(hbs`
      <StarButton
        data-test="star-button"
        @liked={{liked}}
      />
    `);

    assert.dom('span').hasClass('starred');

  });

  test('no fill star when unliked', async function(assert) {
    this.set('liked', false);
    await render(hbs`
      <StarButton
        data-test="star-button"
        @liked={{liked}}
      />
    `);

    assert.dom('span').hasClass('not-starred');
  });
});
