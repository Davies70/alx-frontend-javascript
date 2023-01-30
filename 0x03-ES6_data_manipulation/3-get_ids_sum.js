import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(listOfObjects) {
  const list = getListStudentIds(listOfObjects);
  const sum = list.reduce((acc, studentId) => acc + studentId);
  return sum;
}
