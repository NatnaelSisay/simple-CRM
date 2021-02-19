import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
    Divider,
    List,
    ListItem,
    ListItemText,
    Typography,
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
        height: "100vh",
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
                    <div className={`${classes.listItems}`}>
                        <ListItem className={`${classes.listContainer}]`}>
                            <ListItemText primary={"DashBoad"} />
                        </ListItem>
                    </div>

                    <div
                        className={`${classes.listItems} ${classes.activeLink}`}
                    >
                        <ListItem className={`${classes.listContainer}]`}>
                            <ListItemText primary={"Link"} />
                        </ListItem>
                    </div>

                    <div className={`${classes.listItems}`}>
                        <ListItem className={`${classes.listContainer}]`}>
                            <ListItemText primary={"Link"} />
                        </ListItem>
                    </div>

                    <div className={`${classes.listItems}`}>
                        <ListItem className={`${classes.listContainer}]`}>
                            <ListItemText primary={"Link"} />
                        </ListItem>
                    </div>
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
            </div>
        </div>
    );
}
