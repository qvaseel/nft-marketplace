import './ConnectAWallet.css'
import Image from 'next/image';
import img from "../../img/ConnectWalletPic.png"
import TextH1 from '@/components/TextH1/TextH1';
import TextP from '@/components/TextP/TextP';
import metamask from "../../img/Metamask.svg"
import wallet from "../../img/WalletConnect.svg"
import coin from "../../img/Coinbase.svg"

const Wallet = () => {
    return (
        <div className='walletSection'>
            <Image src={img} alt=''/>
            <div style={{width: '610px', paddingTop: '100px'}}>
                <TextH1 style={{fontWeight:'600', fontSize: '51px', marginBottom: '10px'}}>Connect wallet</TextH1>
                <TextP style={{fontSize: '22px', marginBottom: '40px', width: '460px'}}>Choose a wallet you want to connect. There are several wallet providers.</TextP>
                <a href="#" className='walletLink'>
                    <Image src={metamask} alt=''/>
                    Metamask
                </a>
                <a href="#" className='walletLink'>
                    <Image src={wallet} alt=''/>
                    Wallet Connect
                </a>
                <a href="#" className='walletLink'>
                    <Image src={coin} alt=''/>
                    Coinbase
                </a>
            </div>
        </div>
    )
}

export default Wallet;