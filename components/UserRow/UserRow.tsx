import React from "react";
import "./UserRow.css";
import UserName from "../UserName/UserName";
import IconUser from "../IconUser/IconUser";

interface UserRowProps {
    children: React.ReactNode;
    style: React.CSSProperties;
    src: any;
}

const UserRow = ({children, style, src}: UserRowProps) => {
    return (
        <div className="userRow">
            <IconUser imgUrl={src}/>
            <UserName style={style}>{children}</UserName>
        </div>
    )
    
};

export default UserRow;