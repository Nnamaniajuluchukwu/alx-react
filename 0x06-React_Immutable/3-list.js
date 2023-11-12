import { List } from 'immutable';

/**
 * convert to an immutable List
 * @param {Array} array array to be converted
 */
export function getListObject(array) {
  return List(array);
}

/**
 * append to the list and return the list
 * @param {List} list immutable List
 * @param {*} element item to append to list
 */
export function addElementToList(list, element) {
  return list.push(element);
}
