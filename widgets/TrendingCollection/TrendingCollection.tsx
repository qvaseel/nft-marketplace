import img from "@/img/Storefront.svg"
import user from "../../img/User.svg"
import {ROUTER} from "../../router/router.enum"
import Link from "@/node_modules/next/link"

import "./TrendingCollection.css"
import TextH1 from "@/components/TextH1/TextH1"
import TextP from "@/components/TextP/TextP"
import images from "../../stores/imageTrending"
import Image from "next/image"
import User from "@/components/User/User"
import TextPSM from "@/components/TextPSM/TextPSM"

const TrendingCollection = () => {
    return (
        <section className="trendingSection">
            <TextH1 style={{marginBottom: '10px', fontSize: '38px'}}>Trending Collection</TextH1>
            <TextP style={{marginBottom: '60px', fontSize: '22px'}}>Checkout our weekly updated trending collection.</TextP>
            <div className="cardsTC" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div className="cardTC">
                    <div className="imagesCardTC" style={{marginBottom: '15px'}}>
                        <Image style={{marginBottom: '10px'}} alt="" src={images[0]}/>
                        <div className="rowTC" style={{display: 'flex'}}>
                            <Image style={{marginRight: '15px'}} alt="" src={images[1]}/>
                            <Image style={{marginRight: '15px'}} alt="" src={images[2]}/>
                            <TextPSM style={{fontSize: '25px', backgroundColor: '#A259FF', width: '100px', height: '100px', paddingTop: '32px', textAlign: 'center', borderRadius: '20px'}}>1025+</TextPSM>
                        </div>
                    </div>
                    <User postText="DSGN Animals" stylePostText={{marginBottom: '10px'}} userRow="MrFox" styleUserRow={{marginLeft: '12px', fontFamily: '"Work Sans", sans-serif'}} src={images[9]}/>
                </div>
                <div className="cardTC">
                    <div className="imagesCardTC" style={{marginBottom: '15px'}}>
                        <Image style={{marginBottom: '10px'}} alt="" src={images[3]}/>
                        <div className="rowTC" style={{display: 'flex'}}>
                            <Image style={{marginRight: '15px'}} alt="" src={images[4]}/>
                            <Image style={{marginRight: '15px'}} alt="" src={images[5]}/>
                            <TextPSM style={{fontSize: '25px', backgroundColor: '#A259FF', width: '100px', height: '100px', paddingTop: '32px', textAlign: 'center', borderRadius: '20px'}}>1025+</TextPSM>
                        </div>
                    </div>
                    <User postText="Magic Mushrooms" stylePostText={{marginBottom: '10px'}} userRow="Shroomie" styleUserRow={{marginLeft: '12px', fontFamily: '"Work Sans", sans-serif'}} src={images[10]}/>
                </div>
                <div className="cardTC">
                    <div className="imagesCardTC" style={{marginBottom: '15px'}}>
                        <Image style={{marginBottom: '10px'}} alt="" src={images[6]}/>
                        <div className="rowTC" style={{display: 'flex'}}>
                            <Image style={{marginRight: '15px'}} alt="" src={images[7]}/>
                            <Image style={{marginRight: '15px'}} alt="" src={images[8]}/>
                            <TextPSM style={{fontSize: '25px', backgroundColor: '#A259FF', width: '100px', height: '100px', paddingTop: '32px', textAlign: 'center', borderRadius: '20px'}}>1025+</TextPSM>
                        </div>
                    </div>
                    <User postText="Disco Machines" stylePostText={{marginBottom: '10px'}} userRow="BeKind2Robots" styleUserRow={{marginLeft: '12px', fontFamily: '"Work Sans", sans-serif'}} src={images[11]}/>
                </div>
            </div>
        </section>
    )
}

export default TrendingCollection;