'use client'
import React from "react";
import HighlightedNFT from "@/components/HighlightedNFT/HighlightedNFT";
import "./HeroSection.css"
import Link from "next/link";
import {ROUTER} from "../../router/router.enum"
import Image from "next/image";
import Rocket from "../../img/RocketLaunch.svg"
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import TextPSM from "@/components/TextPSM/TextPSM";
import { useEffect, useRef } from 'react';
import anime from "animejs"

const HeroSection = () => {
    const myElement = useRef([]);
    const myCounter = useRef(null);
    const myCounter1 = useRef(null);
    const myCounter2 = useRef(null);
    

    useEffect(() => {
        const pageWidthMin = -document.documentElement.scrollWidth;

        anime({
            targets: myElement.current,
            translateX: [pageWidthMin, 0],
            delay: anime.stagger(100)
        });

        const myObject = {
            prop1: 0,
            prop2: 0
        }

        anime({
            targets: myObject,
            prop1: 240,
            easing: 'linear',
            round: 1,
            update: function() {
                myCounter.current.innerHTML = myObject.prop1;
            },
            delay: 1500
        });

        anime({
            targets: myObject,
            prop2: 100,
            easing: 'linear',
            round: 1,
            update: function() {
                myCounter1.current.innerHTML = myObject.prop2;
            },
            delay: 1000
        });

        anime({
            targets: myObject,
            prop1: 240,
            easing: 'linear',
            round: 1,
            update: function() {
                myCounter2.current.innerHTML = myObject.prop1;
            },
            delay: 500
        });

    });

    return (
        <section className="heroSection">
            <div className="leftside">
                <div ref={(el) => (myElement.current[0] = el)}>
                    <TextH1 style={{marginBottom: '20px'}}>Discover digital art & Collect NFTs</TextH1>
                    <TextP style={{marginBottom: '30px', fontSize: '22px'}}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</TextP>
                
                </div>
                <Link ref={(el) => (myElement.current[1] = el)} href={ROUTER.MARKETPLACE} className="ls_link">
                    <Image src={Rocket} alt="" className="ls_link_img"/>
                    Get Started
                </Link>
                <div className="ls_stats">
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}}><span ref={myCounter2}>240</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Total Sale</TextP>
                    </div>
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}}><span ref={myCounter1}>100</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Auctions</TextP>
                    </div>
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}} ><span ref={myCounter}>240</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Artists</TextP>
                    </div>
                </div>
            </div>
            <HighlightedNFT/>
        </section>
    )
}

export default HeroSection;