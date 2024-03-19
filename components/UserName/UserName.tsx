import React from "react";
import "./UserName.css";

interface UserNameProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const UserName = ({children, style}: UserNameProps) => {
    return (
        <p className="pUserName" style={style}>{children}</p>
    )
    
};

export default UserName;