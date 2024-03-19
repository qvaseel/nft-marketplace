import "./HowItCard.css"
import Image from "next/image";
import TextP from "../TextP/TextP";

interface HowItCardProps {
    imgUrl: any;
    nameCard: string,
    textCard: string
}

const HowItCard = ({imgUrl, nameCard, textCard}: HowItCardProps) => {
    return (
        <div style={{width: '330px', height: '439px', borderRadius: '20px', backgroundColor: '#3B3B3B', paddingTop: '10px'}}>
            <Image src={imgUrl} alt="" style={{display: 'block', margin: '0 auto', marginBottom: '20px'}}/>
            <div style={{width: '270px', display: 'block', margin: '0 auto'}}>
                <TextP style={{textAlign: 'center', fontWeight: '600', fontFamily: '"Work Sans", sans-serif', fontSize: '22px', marginBottom: '10px'}}>{nameCard}</TextP>
                <TextP style={{textAlign: 'center', fontWeight: 'normal', fontFamily: '"Work Sans", sans-serif', fontSize: '16px'}}>{textCard}</TextP>
            </div>
        </div>
    )
}

export default HowItCard;