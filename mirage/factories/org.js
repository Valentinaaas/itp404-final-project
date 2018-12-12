import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.company.companyName();
  },
  category() {
    return faker.database.type();
  },
  website() {
    return faker.internet.domainName();
  },
  mission() {
    return faker.company.catchPhraseDescriptor();
  }
});
