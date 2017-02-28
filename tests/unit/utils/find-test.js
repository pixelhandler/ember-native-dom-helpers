import { find } from 'ember-native-dom-helpers/utils/find';
import { module, test } from 'qunit';

module('Unit | Utility | find');

test('#find', function(assert) {
  debugger;
  let result = find('input');
  assert.ok(result);
});
