import React from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom';
import './App.css';
import PostsList from "./components/PostsList";
import PostDetails from "./components/PostDetails";
import EditPost from "./components/EditPost";


function App() {
    return (
        <div className="App">
            <nav>
                <NavLink to={"/posts"}>Posts</NavLink>
            </nav>

            <div className={"content"}>
                <Routes>
                    <Route path="/" element={<Navigate to={"/posts"}/>}></Route>
                    <Route path="/posts" element={<PostsList/>}></Route>
                    <Route path="/posts/:id" element={<PostDetails/>}></Route>
                    <Route path="/posts/:id/edit" element={<EditPost/>}></Route>
                </Routes>
            </div>


        </div>
    );
}

export default App;
