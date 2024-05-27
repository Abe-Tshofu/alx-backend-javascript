// 100-createIteratorObject.js
export default function* createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  for (const department in allEmployees) {
    const employees = allEmployees[department];
    for (const employee of employees) {
      yield employee;
    }
  }
}
