/* eslint-disable no-plusplus */
export const weakMap = new WeakMap();
let counter = 1;
export function queryAPI(endpoint) {
  weakMap.set(endpoint, counter++);
  if (counter >= 5) throw new Error('Endpoint load is hight');
  return weakMap.get(endpoint);
}
