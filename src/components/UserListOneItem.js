import React from "react";

export const UserListOneItem = props => (
    <li key={props.user.username}>
        <div className="user">
            <div>
                <img src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`} alt="Avatar"/>

                <strong>{props.user.first_name} {props.user.last_name} </strong>
                <em>Płeć {props.user.gender} </em>
                <span><strong>Login: </strong> {props.user.username}</span>
            </div>
        </div>
    </li>
)
