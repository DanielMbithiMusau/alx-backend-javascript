export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return students.map((student) => student.id).reduce(reducer);
  }
  return [];
}
