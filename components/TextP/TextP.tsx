import React from "react";
import "./textP.css";

interface TextPProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const TextP = ({children, style}: TextPProps) => {
    return (
        <p className="p" style={style}>{children}</p>
    )
    
};

export default TextP;