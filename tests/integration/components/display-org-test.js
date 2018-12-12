import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | display-org', function(hooks) {
  setupRenderingTest(hooks);

  test('renders', async function(assert) {
    await render(hbs`{{display-org}}`);
    // assert.equal(this.element.textContent.trim(), "");
    assert.equal(this.element.querySelector('h3').textContent.trim(), '');


    await render(hbs`
      {{#display-org}}
      {{/display-org}}
    `);
    assert.equal(this.element.querySelector('h3').textContent.trim(), '');
  });
});
