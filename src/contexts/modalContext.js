import React, { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [employeeIndex, setEmployeeIndex] = useState(false);
    return (
        <div>
            <ModalContext.Provider
                value={{
                    isOpen,
                    toggle: () => setIsOpen(!isOpen),
                    employeeIndex,
                    setEmployeeIndex,
                }}
            >
                {props.children}
            </ModalContext.Provider>
        </div>
    );
}

export default ModalProvider;
