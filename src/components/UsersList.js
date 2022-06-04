import React from "react";
import {UserListOneItem} from "./UserListOneItem";
import './UserList.css';

export const UsersList = props => {
    return (
        <ul className="UserList">
            {props.users.map(user => <UserListOneItem key={user.username} user={user} />)}
        </ul>
    )
}