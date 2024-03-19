import React from "react";
import "./RankingsRow.css";
import Image from "next/image";
import TextP from "../TextP/TextP";

interface RankingsRowProps {
    src: any;
    id: string;
    artist: string
}

const RankingsRow = ({artist, src, id}: RankingsRowProps) => {
    return (
        <div className="row">
            <p className="id">{id}</p>
            <Image src={src} alt="" style={{marginRight: '20px'}}/>
            <TextP style={{width: '300px', color: 'white', fontWeight: '600', marginRight: '60px'}}>{artist}</TextP>
            <p className="stat" style={{color: '#00AC4F'}}>+1.41%</p>
            <p className="stat" style={{color: 'white'}}>602</p>
            <p className="stat" style={{color: 'white'}}>12.4 ETH</p>
        </div>
    )
    
};

export default RankingsRow;