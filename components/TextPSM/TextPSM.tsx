import React from "react";
import "./textPSM.css";

interface TextPSMProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const TextPSM = ({children, style}: TextPSMProps) => {
    return (
        <p className="psm" style={style}>{children}</p>
    )
    
};

export default TextPSM;