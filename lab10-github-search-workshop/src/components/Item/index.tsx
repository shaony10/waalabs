import React from "react";
import User from "../../type/User";

type PropType = {
    user: User
}
export default function Item(props:PropType) {
    const {user} = props;
    return <div className="card">
        <a href="https://github.com/reactjs" target="_blank">
            <img src={user.avatar_url} style={{width: "100px"}}/>
        </a>
        <p className="card-text">{user.login}</p>
    </div>
}