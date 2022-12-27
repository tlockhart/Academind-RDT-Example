import React from 'react';
import User from './User';
import { useSelector} from "react-redux";

const DisplayUser = () => {
    const users = useSelector((state) => state.users);
    console.log("USERS:", users);

    const displayUsers = () => {
        return users.map((user, index) => {
            console.log("DisplayUsers:", user);
            return (
                <User key={`user${index}`} user={user}></User>
            )
        });
    }
    return (
        <div>
            {displayUsers()}
        </div>
    );
};

export default DisplayUser;