import React from "react";
import styles from "./TextP.module.css";

interface TextPProps {
    children: React.ReactNode;
    style: React.CSSProperties;
}

const TextP = ({children, style}: TextPProps) => {
    return (
        <p className={styles.p} style={style}>{children}</p>
    )
    
};

export default TextP;