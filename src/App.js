import React from "react";
import './App.css';

import MyContext from "./components/Context";
import Wrapper from "./components/Wrapper";

// Способ 1. Контекст для функциональной архитектуры
// Способ 2. Контекст для классовой архитектуры

function App() {
    return (
        <div className="App">
            <MyContext.Provider value={
                {
                    name: 'Ivan',
                    age: 30
                }
            }>
                <Wrapper />
            </MyContext.Provider>

        </div>
    );
}

export default App;