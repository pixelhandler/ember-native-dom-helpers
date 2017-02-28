//export { default } from 'ember-native-dom-helpers/utils/find';

/*
  The find test helper uses `querySelector` to search inside the test
  DOM (based on app configuration for the rootElement).

  @method find
  @param {String} CSS selector to find one or more elements in the test DOM
  @return {null|HTMLElement} null or an element
  @public
*/
export default function find(selector: string) {
  return document.querySelector(`#ember-testing ${selector}`);
}

