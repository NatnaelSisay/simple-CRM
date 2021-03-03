import React, { createContext, useState } from "react";

export const EmployeeContext = createContext();

function createData(id = 0, name, sex, sallary, active = false) {
    return { id, name, sex, sallary, active };
}

const data = [
    createData(1, "Natnael Sisay", "Male", 4, true),
    createData(2, "Jemal Ahemed", "Male", 3.7),
    createData(3, "Alemlante Bayu", "Male", 25.0, true),
    createData(4, "Temesgen Awoke", "Male", 16.0),
    createData(5, "Lemlem Batu", "Female", 2, true),
];

function EmployeeProvider(props) {
    const [rows, setRows] = useState(data);

    const addEmployee = (data) => {
        // data = {name, sex, sallary}
        if (!data) return;
        const nextId = rows.length + 1;
        data.id = nextId;

        const newData = rows.concat(data); // protect immutability
        setRows(newData);
    };

    const deleteEmployee = (employeeIds) => {
        if (!employeeIds) return;

        const newList = rows.filter(
            (employee) => employeeIds.indexOf(employee.id) == -1
        );

        setRows(newList);
    };

    const getEmployee = (employeeId) => {
        const employee = rows.find((employee) => employee.id == employeeId);
        if (!employee) return null;
        return employee;
    };

    const editEmployee = (modifiedEmployee) => {
        const withoutEmployee = rows.filter(
            (employee) => employee.id != modifiedEmployee.id
        );
        if (!withoutEmployee) return null;

        const newEmployeeList = [...withoutEmployee, modifiedEmployee];
        setRows(newEmployeeList);
    };
    return (
        <EmployeeContext.Provider
            value={{
                rows,
                addEmployee,
                deleteEmployee,
                getEmployee,
                editEmployee,
            }}
        >
            {props.children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeProvider;
