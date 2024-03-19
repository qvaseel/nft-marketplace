import './HowItWorks.css'
import TextH1 from '@/components/TextH1/TextH1';
import TextP from '@/components/TextP/TextP';
import HowItCard from '@/components/HowItCard/HowItCard';
import items from "../../stores/imageHowItWorks"

const HowItWorks = () => {
    return (
        <section className="howItWorksSection">
            <TextH1 style={{fontSize: '38px', marginBottom: '10px'}}>How It Works</TextH1>
            <TextP style={{fontSize: '22px', marginBottom: '48px'}}>Find out how to get started</TextP>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                {items.map((item) => 
                    <HowItCard imgUrl={item.photo} textCard={item.textCard} nameCard={item.nameCard}/>
                )}
            </div>
        </section>
    )
}

export default HowItWorks;