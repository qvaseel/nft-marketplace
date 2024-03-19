import React from "react";
import Image from "next/image";
import TextPSM from "../TextPSM/TextPSM";
import TextP from "../TextP/TextP";
import User from "../User/User";
import "./DiscoverCard.css"

interface DiscoverCardProps {
    srcPhoto: any;
    srcIcon: any;
    postText: string;
    userText: string;
    className: string;
}

const DiscoverCard = ({postText, userText, srcPhoto, srcIcon, className}: DiscoverCardProps) => {
    return (
        <div style={{width: '330px', height: '469px', borderRadius: '20px', marginBottom: '31px'}} className={className}>
            <Image src={srcPhoto} alt="" style={{marginBottom: '20px'}}/>
            <div style={{marginLeft: '30px', marginBottom: '25px'}}>
                <User src={srcIcon} postText={postText} stylePostText={{marginBottom: '5px'}} userRow={userText} styleUserRow={{fontFamily: '"Space Mono", monospace', marginLeft: '12px'}}/>
            </div>
            <div style={{marginLeft: '30px', display: 'flex', width: '270px', justifyContent: 'space-between'}}>
                <div>
                    <TextPSM style={{fontWeight: 'normal', fontSize: '12px', color: '#858584', marginBottom: '8px'}}>Price</TextPSM>
                    <TextPSM style={{fontWeight: 'normal', fontSize: '16px'}}>Price</TextPSM>
                </div>
                <div style={{textAlign: 'right'}}>
                    <TextPSM style={{fontWeight: 'normal', fontSize: '12px', color: '#858584', marginBottom: '8px'}}>Highest Bid</TextPSM>
                    <TextPSM style={{fontWeight: 'normal', fontSize: '16px'}}>0.33 wETH</TextPSM>
                </div>
            </div>
        </div>
    )
    
};

export default DiscoverCard;