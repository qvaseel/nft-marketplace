import "./HighlightedNFT.css"
import Image from "next/image";
import img from "../../img/HighNFT.png"
import icon from "../../img/high_user.png"
import User from "../User/User";

const HighlightedNFT = () => {
    return (
        <div className="high_card">
            <Image src={img} alt="" className="high_img"/>
            <div style={{paddingLeft:"20px"}}>
                <User postText="Space Walking" userRow="Animakid" stylePostText={{marginBottom: '10px'}} src={icon} styleUserRow={{marginLeft: '12px', fontFamily: '"Work Sans", sans-serif'}}></User>
            </div>
        </div>
    )
}

export default HighlightedNFT;