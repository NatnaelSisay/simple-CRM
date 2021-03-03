import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// components
import SmallCard from "../../components/SmallCard";
import EmployeeTable from "../../components/EmployeeTable";
import CustomModal from "../../components/CustomModal";
import { MainNav, SideNav } from "../../components/Navigation";

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: ".5rem",
        display: "grid",
        gridTemplateColumns: "1fr 4fr ",
        gap: "1rem",
    },
}));

export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.grid}>
            <SideNav />

            <div>
                <MainNav />

                <SmallCard />
                <EmployeeTable />

                <CustomModal />
            </div>
        </div>
    );
}
