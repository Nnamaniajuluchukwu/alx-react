import { Map } from 'immutable';

/**
 * return the value of the object at the defined path
 * @param {Object} object containing the items and values
 * @param {List} array array of keys
 * @returns the value searched for
 */
export default function accessImmutableObject(object, array) {
  const map = Map(object);
  return map.getIn(array, undefined);
}
