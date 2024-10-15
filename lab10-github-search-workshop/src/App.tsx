import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";
import {log} from "node:util";
import User from "./type/User";

function App() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        axios.get('https://api.github.com/search/users?q=tom')
            .then(response => {
                setUsers(response.data.items);
            })
            .catch(error => console.log(error.message));
    }, []);
    return (
        <div id="app">
            <div className="container">
                <Header/>
                <Content users={users}/>
            </div>
        </div>
    );
}

export default App;
