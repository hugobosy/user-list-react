import React from "react";
import {UserListOneItem} from "./UserListOneItem";

export const UsersList = props => {
    return (
        <ul>
            {props.users.map(user => <UserListOneItem key={user.username} user={user} />)}
        </ul>
    )
}