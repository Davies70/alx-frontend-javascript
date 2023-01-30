/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filtered = listOfStudents.filter((obj) => obj.location === city);
  const updated = filtered.map((obj) => {
    obj.grade = 'N/A';
    newGrades.forEach((student) => {
      if (student.studentId === obj.id) {
        obj.grade = student.grade;
      }
    });
    return obj;
  });
  return updated;
}
