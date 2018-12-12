import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | orgs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting: shows orgs', async function(assert) {
    server.loadFixtures('orgs');

    await visit('/');
    // await pauseTest();

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="org"]').exists({ count:8 });
  });

  test('viewing all attributes of orgs', async function(assert){
    server.loadFixtures('orgs');

    await visit('/orgs/1');

    assert.dom('[data-test="org-name"]').hasText('The Engineer Factory');
    assert.dom('[data-test="org-category"]').hasText('Category: education, STEM');
    assert.dom('[data-test="org-website"]').hasText('Website: https://www.theengineerfactory.org/');
    assert.dom('[data-test="org-mission"]').hasText('Mission: The mission of the Engineer Factory is to increase the number of students from underrepresented populations (girls and students of color) that pursue higher education and careers in Engineering.');
  });

//adding test not working
  test('create a org', async function(assert){
    await visit('/orgs/new');
    await fillIn('[data-test="name"] input', 'Test Create');
    await fillIn('[data-test="category"] input','Test Create' );
    await fillIn('[data-test="website"] input', 'Test Create');
    await fillIn('[data-test="mission"] textarea', 'Test Create');
    await click('[data-test="add"] button');

    assert.equal(currentURL(), '/orgs/1');

    assert.dom('[data-test="org-name"]').hasText('Test Create');
    assert.dom('[data-test="org-category"]').hasText('Category: Test Create');
    assert.dom('[data-test="org-website"]').hasText('Website: Test Create');
    assert.dom('[data-test="org-mission"]').hasText('Mission: Test Create');
  });

  test('Deleted an org', async function(assert) {
    server.loadFixtures('orgs');
    window.confirm = () => true;

    await visit('/');
    await click('[data-test="delete-org"]');

    assert.dom('[data-test="org"]').exists({ count: 7 });
  });

  test('edit an org', async function(assert){
    server.loadFixtures('orgs');
    await visit('/orgs/1/edit');
    await fillIn('[data-test="website"] input', 'Test Edit');
    await click('[data-test="save"] button');

    assert.equal(currentURL(), '/orgs/1');

    assert.dom('[data-test="org-website"]').hasText('Website: Test Edit');
  });
});
