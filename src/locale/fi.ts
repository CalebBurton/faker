import { Faker } from '..';
import fi from '../locales/fi';
import en from '../locales/en';

const faker = new Faker({
  locale: 'fi',
  localeFallback: 'en',
  locales: {
    fi,
    en,
  },
});

export = faker;
