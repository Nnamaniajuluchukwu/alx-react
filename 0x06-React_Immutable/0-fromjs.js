import { fromJS } from 'immutable';

/**
 * Convert an object ot Immutable Map
 * @param {Object} object
 * @returns an immutable Map
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
