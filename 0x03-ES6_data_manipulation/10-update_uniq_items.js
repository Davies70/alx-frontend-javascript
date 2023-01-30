/* eslint-disable no-param-reassign */
export default function updateUniqueItems(items) {
  if (items instanceof Map === false) throw new Error('Cannot process');
  for (const key of items.keys()) {
    if (items.get(key) === 1) items.set(key, 100);
  }
  return items;
}
