const { fromJS } = require('immutable');

/**
 * Convert an object ot Immutable Map
 * @param {Object} object
 * @returns an immutable Map
 */
function getImmutableObject(object) {
  return fromJS(object);
}

module.exports = getImmutableObject;