export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  const mapped = arrayOfObjects.map((obj) => obj.id);
  return mapped;
}
