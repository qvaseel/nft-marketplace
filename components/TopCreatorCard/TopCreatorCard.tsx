import React from "react";
import Image from "next/image";
import TextPSM from "../TextPSM/TextPSM";
import TextP from "../TextP/TextP";

interface TopCreatorCardProps {
    src: any;
    id: string;
    login: string;
}

const TopCreatorCard = ({login, src, id}: TopCreatorCardProps) => {
    return (
        <div style={{width: '240px', height: '238px', borderRadius: '20px', backgroundColor: '#3B3B3B', marginBottom: '30px', position: 'relative', paddingTop: '30px'}}>
            <TextPSM style={{fontSize: '16px', color: '#858584', backgroundColor: '#2B2B2B', width: '30px', height: '30px', paddingTop: '2px',  textAlign: 'center', borderRadius: '100px', position: 'absolute', top: '18px', left: '20px'}}>{id}</TextPSM>
            <Image src={src} alt="" style={{display:'block', width: '120px', height: '120px', margin: '0 auto'}}/>
            <TextP style={{fontSize: '22px', marginBottom: '5px', textAlign: 'center', marginTop: '20px'}}>{login}</TextP>
            <div style={{display: 'flex', margin: '0 auto', width: '200px', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextP style={{fontSize: '16px', color: '#858584'}}>Total Sales:</TextP>
                <TextPSM style={{fontSize: '16px'}}>34.53 ETH</TextPSM>
            </div>
        </div>
    )
    
};

export default TopCreatorCard;