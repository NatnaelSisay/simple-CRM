import Dashboard from "../../screens/Dashboard";

import EmployeeProvider from "../../contexts/employeesContext";
import ModalProvider from "../../contexts/modalContext";

function App() {
    return (
        <div className="App">
            <EmployeeProvider>
                <ModalProvider>
                    <Dashboard />
                </ModalProvider>
            </EmployeeProvider>
        </div>
    );
}

export default App;
