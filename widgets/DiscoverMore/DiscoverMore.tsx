import "./DiscoverMore.css"
import TextH1 from "@/components/TextH1/TextH1"
import TextP from "@/components/TextP/TextP"
import items from "../../stores/imageDiscover"
import Image from "next/image"
import Link from "next/link"
import {ROUTER} from "../../router/router.enum"
import eye from "../../img/Eye.svg"
import DiscoverCard from "@/components/DiscoverCard/DiscoverCard"

const DiscoverMore = () => {
    return (
        <section className="discoverMoreSection">
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '60px'}}>
                <div>
                    <TextH1 style={{marginBottom: '10px', fontSize: '38px'}}>Discover More NFTs</TextH1>
                    <TextP style={{fontSize: '22px'}}>Explore new trending NFTs</TextP>
                </div>
                <Link href={ROUTER.HOME} className="dm_link">
                    <Image src={eye} alt="" className="dm_link_img"/>
                    See All
                </Link>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                {items.map((item) =>
                    <DiscoverCard postText={item.postText}
                    userText={item.userText}
                    srcIcon={item.srcIcon}
                    srcPhoto={item.srcPhoto}
                    className="discover"/>
                )}
            </div>
        </section>
    )
}

export default DiscoverMore;