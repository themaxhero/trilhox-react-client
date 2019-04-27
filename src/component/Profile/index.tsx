import React from "react";
import User, { user } from "../../type/user";
import Image from "react-bootstrap/Image";

interface IProps {
    user: user;
}

function Component({ user }: IProps){
    const avatar = User.getAvatar(user);
    const name = User.getName(user);
    const username = User.getUsername(user);
    return (
        <div>
            <div>
                <Image src={ avatar } roundedCircle/>
                <h1>{ name ? name : username }</h1>
            </div>
        </div>
    )
}

export default Component;