/**
 * check if two maps are equal
 * @param {Map} map1
 * @param {Map} map2
 * @returns true if equal or false if not.
 */
export default function areMapsEqual(map1, map2) {
  return map1.equals(map2);
}
