// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployees = { ...employee };

    updatedEmployees[key] = value;

    return updatedEmployees;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployees = { ...employee };

    delete deletedEmployees[key];

    return deletedEmployees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];

    return employee;
}

const employee = {
    name: "Sam",
};

updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
deleteFromEmployeeByKey(employee, "name");
destructivelyDeleteFromEmployeeByKey(employee, "name")

