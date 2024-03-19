import "./PhotosNumbers.css"
import Image from "next/image";

const PhotosNumbers = ({imgSrc, card_text, iconSrc, }) => {
    return (
        <div className="photosCard">
            <Image src={imgSrc} alt=""/>
            <div className="photos">
                <Image src={imgSrc} alt=""/>
                <Image src={imgSrc} alt=""/>
                <button className=""></button>
            </div>
            <p>{card_text}</p>
            <div className="userCard">
                <Image src={iconSrc} alt=""/>
                <p>{}</p>
            </div>
        </div>
    )
}

export default PhotosNumbers;