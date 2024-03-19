import React from "react";
import Image from "next/image";
import TextPSM from "../TextPSM/TextPSM";
import TextP from "../TextP/TextP";

interface BrowseCategoriesCardProps {
    src: any;
    login: string;
}

const BrowseCategoriesCard = ({login, src}: BrowseCategoriesCardProps) => {
    return (
        <div style={{width: '240px', height: '316px', borderRadius: '20px', backgroundColor: '#3B3B3B', marginBottom: '30px'}}>
            <Image src={src} alt="" style={{marginBottom: '20px'}}/>
            <TextP style={{fontSize: '22px', marginLeft: '30px'}}>login</TextP>
        </div>
    )
    
};

export default BrowseCategoriesCard;