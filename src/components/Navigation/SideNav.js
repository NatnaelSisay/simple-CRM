import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Icon,
} from "@material-ui/core";

import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const links = [
    {
        name: "Dash Board",
        to: "/",
        icon: <DashboardIcon />,
        active: true,
    },
    {
        name: "Charts",
        to: "/",
        icon: <AssessmentIcon />,
    },
    {
        name: "Employee",
        to: "/",
        icon: <SupervisorAccountIcon />,
    },
    {
        name: "Setting",
        to: "/",
        icon: <SettingsIcon />,
    },
];

const useStyles = makeStyles((theme) => ({
    sideNav: {
        backgroundColor: "#3f51b5",
        minHeight: "97vh",
        color: "white",
    },

    sideNavHeader: {
        fontSize: "28px",
        marginTop: "1.5rem",
        letterSpacing: ".5rem",
        fontWeight: "500",
    },
    borderEdge: {
        overflow: "hidden",
        borderRadius: "10px",
    },

    listContainer: {
        marginTop: "2rem",
        padding: "4px",
        paddingRight: "0px",
    },

    listItems: {
        paddingLeft: "1rem",
        paddingRight: "10px",

        margin: "0px",
        marginTop: "1rem",

        overflow: "hidden",
        transition: "all 0.5 ease-in-out",

        "&:hover": {
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px 0px 0px 10px",
        },
    },

    activeLink: {
        backgroundColor: "#f7f2ff",
        color: "black",
        borderRadius: "10px 0px 0px 10px",
    },
}));

function SideNav(props) {
    const classes = useStyles();
    return (
        <div className={`${classes.sideNav} ${classes.borderEdge}`}>
            <Typography
                variant="h1"
                align="center"
                className={classes.sideNavHeader}
            >
                LEMLEM
            </Typography>
            <List className={`${classes.listContainer}`}>
                <ListItem className={`${classes.listContainer}`}>
                    <ListItemText primary={"Main Menu"} />
                </ListItem>
                <Divider />
                {links.map((link, index) => {
                    return (
                        <div
                            className={`${classes.listItems} ${
                                link.active ? classes.activeLink : null
                            }`}
                            key={index}
                        >
                            <ListItem className={`${classes.listContainer}]`}>
                                <ListItemIcon color="inherit">
                                    <Icon>{link.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={link.name} />
                            </ListItem>
                        </div>
                    );
                })}
            </List>
        </div>
    );
}

export default SideNav;
