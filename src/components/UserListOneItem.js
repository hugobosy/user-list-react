import React from "react";
import './UserListOneItem.css';

export const UserListOneItem = props => (
    <li key={props.user.username}>
        <div className="UserListOneItem">
            <img src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.user.picture}`}
                 alt="Avatar"/>
            <div className="UserListOneItem__text">
                <p>{props.user.first_name} {props.user.last_name} </p>
                <span><span>Płeć:</span> {props.user.gender}, <span>Login:</span> {props.user.username} </span>
            </div>
        </div>
    </li>
)
