import { is } from 'immutable';

/**
 * check if two maps are equal
 * @param {Map} map1
 * @param {Map} map2
 * @returns true if equal or false if not.
 */
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
