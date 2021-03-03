import React from "react";
import { makeStyles } from "@material-ui/core";

import WcTwoToneIcon from "@material-ui/icons/WcTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import SwapVertTwoToneIcon from "@material-ui/icons/SwapVertTwoTone";

import SingleCard from "./SingleCard";

const useStyles = makeStyles((theme) => ({
    smallCardContainer: {
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2rem",
    },
}));

const SmallCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.smallCardContainer}>
            <SingleCard
                header="15"
                subTitle="Employees"
                icon={<WcTwoToneIcon />}
            />
            <SingleCard header="10" subTitle="Male" icon={<PersonIcon />} />
            <SingleCard
                header="5"
                subTitle="Female"
                icon={<PregnantWomanIcon />}
            />
            <SingleCard
                header="9"
                subTitle="Active"
                icon={<SwapVertTwoToneIcon />}
            />
        </div>
    );
};

export default SmallCard;
