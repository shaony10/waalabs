import React from "react";
import Item from "../Item";
import User from "../../type/User";

type PropType = {
    users: User[]
}
export default function Content(props: PropType) {
    const {users} = props;
    return <>
        <div className="row">
            <div className="col-sm-12">
                {users.map((user, index) => <Item key={user.id} user={user}/>)}
            </div>
        </div>
    </>;
}