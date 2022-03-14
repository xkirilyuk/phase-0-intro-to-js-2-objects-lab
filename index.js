const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key]= value;
    return newEmployee;
    return employee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "",
)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee2 = {...employee}
    newEmployee2[key]= value;
    return newEmployee2;
    return employee;
}

const newEmployee2 = deleteFromEmployeeByKey(
    employee,
    "name",
    "",
)

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;
    return employee;
}