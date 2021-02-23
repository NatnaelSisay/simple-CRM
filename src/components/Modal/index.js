import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "50%",
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    inputFieldContainer: {
        display: "flex",
        justifyContent: "space-between",

        "&>*": {
            width: "100%",
            margin: "1rem",
        },
    },
    buttons: {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function CustomModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {/* <button type="button" onClick={handleOpen}>
                react-transition-group
            </button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{"Add | Edit"}</h2>
                        <div className={classes.inputFieldContainer}>
                            <TextField variant="outlined" label="First Name" />
                            <TextField variant="outlined" label="Last Name" />
                        </div>
                        <div className={classes.inputFieldContainer}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    Gender
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    variant="outlined"
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="With normal TextField"
                                id="standard-end-adornment"
                                variant="outlined"
                                type="number"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            Birr
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.buttons}>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => handleClose()}
                            >
                                Cancel
                            </Button>
                            <Button color="primary" variant="contained">
                                Add
                            </Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
