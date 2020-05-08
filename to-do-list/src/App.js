import React from 'react';
import './App.css';
import TodoMain from "./components/TodoMain";
import NavBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App" >
            <NavBar/>
            <TodoMain/>
        </div>
    );
}

export default App;
