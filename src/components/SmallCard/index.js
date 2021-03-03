import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";

import WcTwoToneIcon from "@material-ui/icons/WcTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import SwapVertTwoToneIcon from "@material-ui/icons/SwapVertTwoTone";

import SingleCard from "./SingleCard";

// CONTEXT
import { EmployeeContext } from "../../contexts/employeesContext";

const useStyles = makeStyles((theme) => ({
    smallCardContainer: {
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2rem",
    },
}));

const filterEmployeesBySex = (employees, type) => {
    return employees.filter((employee) => employee.sex == type);
};
const SmallCard = () => {
    const classes = useStyles();
    const { rows } = useContext(EmployeeContext);
    const numberOfEmployees = rows.length;
    const maleEmployees = filterEmployeesBySex(rows, "Male").length;
    const femaleEmployees = filterEmployeesBySex(rows, "Female").length;
    const activeEmployees = rows.filter((employee) => employee.active).length;

    return (
        <div className={classes.smallCardContainer}>
            <SingleCard
                header={numberOfEmployees}
                subTitle="Employees"
                icon={<WcTwoToneIcon />}
            />
            <SingleCard
                header={maleEmployees}
                subTitle="Male"
                icon={<PersonIcon />}
            />
            <SingleCard
                header={femaleEmployees}
                subTitle="Female"
                icon={<PregnantWomanIcon />}
            />
            <SingleCard
                header={activeEmployees}
                subTitle="Active"
                icon={<SwapVertTwoToneIcon />}
            />
        </div>
    );
};

export default SmallCard;
