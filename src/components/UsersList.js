import React, {useState} from "react";
import {UserListOneItem} from "./UserListOneItem";
import './UserList.css';

export const UsersList = props => {

    const [list, setList] = useState(props.users);

    const removeListItem = (username) => {
        setList(list => (
            list
                .filter(one => one.username !== username)
        ))
    }

    return (
        <ul className="UserList">
            {list.map(user => <UserListOneItem key={user.username} user={user} remove={removeListItem}/>)}
        </ul>
    )
}