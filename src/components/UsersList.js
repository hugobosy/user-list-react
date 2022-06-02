import React from "react";

export const UsersList = props => {
    return (
        <ul>
            {props.users.map(user => (
                <li key={user.username}>
                    {user.username}
                </li>
            ))}
        </ul>
    )
}