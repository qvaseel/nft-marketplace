import "./Footer.css"
import TextPSM from "@/components/TextPSM/TextPSM";
import TextP from "@/components/TextP/TextP";
import Link from "next/link";
import {ROUTER} from "../../router/router.enum"
import Input from "@/components/Input/Input";

const Footer = () => {
    return (
        <footer className="cont_footer">
            <div className="footer">
                <div style={{width: '240px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <TextPSM style={{fontSize: '22px', fontWeight: '700'}}>Explore</TextPSM>
                    <TextP style={{fontSize: '16px', color: '#CCCCCC'}}><Link className="link_footer" href={ROUTER.MARKETPLACE}>Marketplace</Link></TextP>
                    <TextP style={{fontSize: '16px', color: '#CCCCCC'}}><Link className="link_footer" href={ROUTER.RANKINGS}>Rankings</Link></TextP>
                    <TextP style={{fontSize: '16px', color: '#CCCCCC'}}><Link className="link_footer" href={ROUTER.WALLET}>Connect a wallet</Link></TextP>
                </div>
                <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <TextPSM style={{fontSize: '22px', fontWeight: '700'}}>Join our weekly digest</TextPSM>
                    <TextP style={{fontSize: '16px', color: '#CCCCCC'}}>Get exclusive promotions & updates straight to your inbox.</TextP>
                    <Input/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;