import "./TopCreators.css"
import TextH1 from "@/components/TextH1/TextH1"
import TextP from "@/components/TextP/TextP"
import items from "../../stores/imageTopCreators"
import Image from "next/image"
import User from "@/components/User/User"
import TextPSM from "@/components/TextPSM/TextPSM"
import Link from "next/link"
import {ROUTER} from "../../router/router.enum"
import Rocket from "../../img/RocketLaunchViolet.svg"
import TopCreatorCard from "@/components/TopCreatorCard/TopCreatorCard"

const TopCreators = () => {
    return (
        <section className="topCreatorsSection">
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '60px'}}>
                <div>
                    <TextH1 style={{marginBottom: '10px', fontSize: '38px'}}>Top creators</TextH1>
                    <TextP style={{fontSize: '22px'}}>Checkout Top Rated Creators on the NFT Marketplace</TextP>
                </div>
                <Link href={ROUTER.RANKINGS} className="tc_link">
                    <Image src={Rocket} alt="" className="tc_link_img"/>
                    View Rankings
                </Link>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                {items.map((item) =>
                    <TopCreatorCard login={item.login}
                                    src={item.photo}
                                    id={item.id}/>
                )}
            </div>
        </section>
    )
}

export default TopCreators;