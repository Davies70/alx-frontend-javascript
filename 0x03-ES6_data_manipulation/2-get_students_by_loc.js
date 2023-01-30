export default function getStudentsByLocation(listOfObjects, city) {
  const filteredList = listOfObjects.filter((obj) => obj.location === city);
  return filteredList;
}
