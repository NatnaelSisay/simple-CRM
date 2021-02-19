import React from "react";
import { Card, Icon, makeStyles, Typography } from "@material-ui/core";
import { AccountBalance } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
    },

    icon: {
        padding: "1rem",

        backgroundColor: "lightgray",
        borderRadius: "50%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        fontWeight: "bold",
    },
    subTitle: {
        color: "#878685",
    },
}));

function SmallCard({ header = "", subTitle = "", icon = <AccountBalance /> }) {
    const classes = useStyles();
    return (
        <Card className={classes.container}>
            <div>
                <Typography variant="h5" className={classes.header}>
                    {header}
                </Typography>
                <Typography variant="subtitle1" className={classes.subTitle}>
                    {subTitle}
                </Typography>
            </div>
            <div>
                <Icon color="inherit" className={classes.icon}>
                    {icon}
                </Icon>
            </div>
        </Card>
    );
}

export default SmallCard;
