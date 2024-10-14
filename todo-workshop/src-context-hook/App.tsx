import React, {useContext, useEffect} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main"

import './App.css';
import TodoContext from "./context/TodoContext";

function App() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("TodoContext must be used within a ToDoContextProvider");
    }
    const {populateTodos} = context;

    useEffect(() => {
        populateTodos();
    }, []);

    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <h1>TODO list workshop</h1>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
