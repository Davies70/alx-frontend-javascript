export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (let i = 0; i < reportWithIterator.length; i += 1) {
    if (i < reportWithIterator.length - 1) {
      employeeNames += `${reportWithIterator[i]} | `;
    } else {
      employeeNames += `${reportWithIterator[i]}`;
    }
  }
  return employeeNames;
}
