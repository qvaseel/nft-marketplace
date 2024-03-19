'use client'
import './MagicMashrooms.css'
import UserRow from "@/components/UserRow/UserRow"
import TextH1 from "@/components/TextH1/TextH1"
import items from "../../stores/imageTopCreators"
import Image from "next/image"
import TextPSM from "@/components/TextPSM/TextPSM"
import Link from "next/link"
import {ROUTER} from "../../router/router.enum"
import eye from "../../img/Eye.svg"
import Mashroom from "../../img/mashroom.png"
import shroomie from "../../img/shroomie.png"
import User from '@/components/User/User'
import React from 'react';
import { useUnit } from 'effector-react';
import Timer from '@/components/Timer/Timer'

const MagicMashrooms = () => {
    return (
        <section className="black">
            <div className="magicMashroomsSection">
                <div className="inside">
                    <div style={{width: '1050px', paddingTop: '360px', display: 'flex', margin: '0 auto', justifyContent: 'space-between'}}>
                        <div>
                            <div style={{width: '151px', height: '44px', borderRadius: '20px', backgroundColor: '#3B3B3B', paddingLeft: '20px', paddingTop: '10px', marginBottom: '30px'}}>
                                <UserRow src={shroomie} style={{fontSize: '16px', marginLeft: '12px', color: 'white', fontFamily: '"Work Sans", sans-serif' }}>Shroomie</UserRow>
                            </div>
                            <TextH1 style={{fontSize: '51px', color: 'white', marginBottom: '30px'}}>Magic Mashrooms</TextH1>
                            <Link href={ROUTER.HOME} className="mm_link">
                                <Image src={eye} alt="" className="mm_link_img"/>
                                See NFT
                            </Link>
                        </div>
                        <Timer/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MagicMashrooms;