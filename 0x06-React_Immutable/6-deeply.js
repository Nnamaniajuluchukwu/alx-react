import { Map } from 'immutable';

/**
 * deepmerge two objects
 * @param {Object} page1
 * @param {Object} page2
 */
export default function mergeDeeplyElements(page1, page2) {
  const map = Map(page1);
  return map.mergeDeep(page2);
}
