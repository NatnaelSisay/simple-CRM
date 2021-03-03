import React, { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <ModalContext.Provider
                value={{ isOpen, toggle: () => setIsOpen(!isOpen) }}
            >
                {props.children}
            </ModalContext.Provider>
        </div>
    );
}

export default ModalProvider;
