import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

import WcTwoToneIcon from "@material-ui/icons/WcTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import SwapVertTwoToneIcon from "@material-ui/icons/SwapVertTwoTone";

// components
import SmallCard from "../SmallCard";

import {
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Icon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },

    grid: {
        padding: ".5rem",
        display: "grid",
        gridTemplateColumns: "1fr 4fr ",
        gap: "1rem",
    },

    sideNav: {
        backgroundColor: "#3f51b5",
        minHeight: "100vh",
        borderRadius: "10px",
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
        marginTop: "3rem",
        padding: "4px",
        paddingRight: "0px",
    },

    activeLink: {
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px 0px 0px 10px",
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

    // small card
    smallCardContainer: {
        marginTop: "1rem",
        marginBottom: "1rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "2rem",
    },

    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },

    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

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

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.grid}>
            <div className={`${classes.sideNav} ${classes.borderEdge}`}>
                <Typography
                    variant="h1"
                    align="center"
                    className={classes.sideNavHeader}
                >
                    LEMLEM
                </Typography>
                <List className={`${classes.listContainer}`}>
                    <ListItem className={`${classes.listContainer}]`}>
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
                                <ListItem
                                    className={`${classes.listContainer}]`}
                                >
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

            <div>
                <AppBar position="static" className={`${classes.borderEdge}`}>
                    <Toolbar>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton color="inherit">
                                <Badge
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    badgeContent={2}
                                    color="secondary"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton edge="end" color="inherit">
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <div className={classes.smallCardContainer}>
                    <SmallCard
                        header="15"
                        subTitle="Employees"
                        icon={<WcTwoToneIcon />}
                    />
                    <SmallCard
                        header="10"
                        subTitle="Male"
                        icon={<PersonIcon />}
                    />
                    <SmallCard
                        header="5"
                        subTitle="Female"
                        icon={<PregnantWomanIcon />}
                    />
                    <SmallCard
                        header="9"
                        subTitle="Active"
                        icon={<SwapVertTwoToneIcon />}
                    />
                </div>
            </div>
        </div>
    );
}
