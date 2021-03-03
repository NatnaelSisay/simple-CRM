import React, { useContext, useEffect, useState } from "react";
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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import TextField from "@material-ui/core/TextField";

// CONTEXT
import { ModalContext } from "../../contexts/modalContext";
import { EmployeeContext } from "../../contexts/employeesContext";

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
    activeSwitch: {
        padding: "1rem",
    },
    buttons: {
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function CustomModal({ editIndex = 0 }) {
    const classes = useStyles();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [sallary, setSallary] = useState(0);
    const [active, setActive] = useState(false);

    const { isOpen, toggle, employeeIndex, setEmployeeIndex } = useContext(
        ModalContext
    );
    const { addEmployee, getEmployee, editEmployee } = useContext(
        EmployeeContext
    );

    useEffect(() => {
        if (employeeIndex) {
            const employee = getEmployee(employeeIndex);
            setId(employee.id);
            setName(employee.name);
            setSex(employee.sex);
            setSallary(employee.sallary);
            setActive(employee.active);
        }
    }, [employeeIndex]);

    const clearFields = () => {
        setName("");
        setSex("");
        setSallary(0);
        setEmployeeIndex(false);
    };
    const haddleAddEmployee = () => {
        const data = { name, sex: sex, sallary, active };
        console.log(data);
        addEmployee(data);
        clearFields();
        toggle();
    };

    const handleEditEmployee = () => {
        const data = { id, name, sex, sallary, active };
        editEmployee(data);
        clearFields();
        toggle();
    };

    const handleCancel = () => {
        clearFields();
        toggle();
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                onClose={toggle}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">{"Add | Edit"}</h2>
                        <div className={classes.inputFieldContainer}>
                            <TextField
                                variant="outlined"
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {/* <TextField variant="outlined" label="Last Name" /> */}
                        </div>
                        <div className={classes.inputFieldContainer}>
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    Sex
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    variant="outlined"
                                    value={sex}
                                    onChange={(e) => setSex(e.target.value)}
                                >
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label="Sallary"
                                id="standard-end-adornment"
                                variant="outlined"
                                type="number"
                                value={sallary}
                                onChange={(e) => setSallary(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            Birr
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div className={classes.activeSwitch}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={active}
                                        onChange={() => setActive(!active)}
                                        color="primary"
                                        name="checkedB"
                                        inputProps={{
                                            "aria-label": "primary checkbox",
                                        }}
                                    />
                                }
                                label="Active"
                            />
                        </div>
                        <div className={classes.buttons}>
                            <Button
                                color="secondary"
                                variant="contained"
                                onClick={() => handleCancel()}
                            >
                                Cancel
                            </Button>
                            {employeeIndex ? (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => handleEditEmployee()}
                                >
                                    Update
                                </Button>
                            ) : (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => haddleAddEmployee()}
                                >
                                    Add
                                </Button>
                            )}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
