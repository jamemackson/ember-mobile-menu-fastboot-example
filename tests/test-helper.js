import Application from 'ember-mobile-menu-test/app';
import config from 'ember-mobile-menu-test/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
