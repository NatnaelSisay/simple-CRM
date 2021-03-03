import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    borderEdge: {
        overflow: "hidden",
        borderRadius: "10px",
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
}));

function MainNav(props) {
    const classes = useStyles();

    return (
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
    );
}

export default MainNav;
