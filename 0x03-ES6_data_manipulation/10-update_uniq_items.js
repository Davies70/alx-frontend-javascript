/* eslint-disable no-param-reassign */
export default function updateUniqueItems(items) {
  for (const key of items.keys()) {
    if (items.get(key) === 1) items.set(key, 100);
  }
  return items;
}
