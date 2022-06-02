import React from "react";

export const UserListOneItem = props => (
    <li key={props.user.username}>
        <div className="user">
            <div>
                <strong>{props.user.first_name} {props.user.last_name} </strong>
                <em>Płeć {props.user.gender}</em>
            </div>
        </div>
    </li>
)
