import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import axios from "axios";
import User from "./type/User";

function App() {
    const [users, setUsers] = useState<User[]>([]);
    const [statusMsg, setStatusMsg]=useState("Please enter keayword to start Search");
    const loadData = (keyword:string) => {
        axios.get('https://api.github.com/search/users?q='+keyword)
            .then(response => {
                const items = response.data.items;
                setUsers(items);
                setStatusMsg(items.length>0?"":"No user found with this keyword!");
            })
            .catch(error => {
                setUsers([]);
                setStatusMsg("Request failed with status code 404");
            });
    }
    useEffect(() => {
        PubSub.subscribe('SEARCH_TOPIC', (msg, keyword) => {
            loadData(keyword);
        });

    }, []);

    return (
        <div id="app">
            <div className="container">
                <Header/>
                <h3>{statusMsg}</h3>
                <Content users={users}/>
            </div>
        </div>
    );
}

export default App;
