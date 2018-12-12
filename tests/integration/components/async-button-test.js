import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | async-button', function(hooks) {
  setupRenderingTest(hooks);

  test('shows "adding" post add click', async function(assert) {
    await render(hbs`
      <AsyncButton
        data-test="add"
        @defaultText="Add"
        @pendingText="Adding..."
      />
    `);
    await click('[data-test="add"]');

    assert.dom('[data-test="add"]').hasText('Adding...');
  });

  test('shows "saving" post save click', async function(assert) {
    await render(hbs`
      <AsyncButton
        data-test="save"
        @defaultText="Save"
        @pendingText="Saving..."
      />
    `);
    await click('[data-test="save"]');

    assert.dom('[data-test="save"]').hasText('Saving...');
  });
});
