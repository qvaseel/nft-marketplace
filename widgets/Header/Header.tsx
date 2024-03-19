'use client'
import img from "@/img/Storefront.svg"
import user from "../../img/User.svg"
import {ROUTER} from "../../router/router.enum"
import Link from "@/node_modules/next/link"
import "./Header.css"
import Image from "next/image"
import { useEffect, useRef } from "react"
import bars from "../../img/bars.png"

const Header = () => {
    const btn = document.getElementById("navbar_toggler");
    
    const Show = () => {
        const nav = document.getElementById('navbar');
        console.log(nav)
        nav.classList.toggle("show");
    }
    return (
        <header className="cont_header">
            <div className="header">
                <Link href={ROUTER.HOME} className="logo">
                    <Image src={img} alt="" className="logo_img"/>
                    NFT Marketplace
                </Link>
                <nav className="nav" id="navbar">
                    <Link href={ROUTER.MARKETPLACE} className="text_nav">Marketplace</Link>
                    <Link href={ROUTER.RANKINGS} className="text_nav">Rankings</Link>
                    <Link href={ROUTER.WALLET} className="text_nav">Connect a wallet</Link>
                    <Link href={ROUTER.ACC} className="btn_nav">
                        <Image src={user} alt="" />
                        Sign Up
                    </Link>
                </nav>
                <button className="navbar_toggler" id="navbar_toggler" type="button" onClick={Show}>
                    <Image src={bars} alt="bars" className="bars"/>
                </button>
            </div>
        </header>
    )
}

export default Header;