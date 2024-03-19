import React from "react";
import "./textH1.css";

interface TextH1Props {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const TextH1 = ({children, style}: TextH1Props) => {
    return (
        <h1 className="h1" style={style}>{children}</h1>
    )
    
};

export default TextH1;