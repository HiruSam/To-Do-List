import React from 'react';
import './App.css';
import TodoMain from "./components/TodoMain";
import NavigationBar from "./components/NavigationBar";

function App() {
    return (
        <div className="App" >
            {/*<NavigationBar/>*/}
            <TodoMain/>
        </div>
    );
}

export default App;
