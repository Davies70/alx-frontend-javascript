export default function createIteratorObject(report) {
  const result = [];
  const employeeNames = Object.values(report.allEmployees);
  for (const name of employeeNames) {
    result.push(...name);
  }
  return result;
}
