export const weakMap = new WeakMap();
let counter = 1;
export function queryAPI(endpoint) {
  weakMap.set(endpoint, counter);
  counter += 1;
  const querycounter = weakMap.get(endpoint);
  if (querycounter >= 5) throw new Error('Endpoint load is high');
  return weakMap.get(endpoint);
}
