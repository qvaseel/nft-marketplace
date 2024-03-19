import React from "react";
import "./PostText.css";

interface PostTextProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const PostText = ({children, style}: PostTextProps) => {
    return (
        <p className="pPostText" style={style}>{children}</p>
    )
    
};

export default PostText;