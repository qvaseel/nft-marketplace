import React from "react";
import styles from "./TextPSM.module.css";

interface TextPSMProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const TextPSM = ({children, style}: TextPSMProps) => {
    return (
        <p className={styles.psm} style={style}>{children}</p>
    )
    
};

export default TextPSM;