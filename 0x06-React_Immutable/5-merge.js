import { List, Map } from 'immutable';

/**
 * Concat two list
 * @param {Array} page1
 * @param {Array} page2
 * @returns a new list
 */
export function concatElements(page1, page2) {
  const lst1 = List(page1);
  return lst1.concat(page2);
}

/**
 * merge two object together
 * @param {Object} page1
 * @param {Object} page2
 * @return a single merged object
 */
export function mergeElements(page1, page2) {
  const map = Map(page1);
  return map.merge(page2);
}
