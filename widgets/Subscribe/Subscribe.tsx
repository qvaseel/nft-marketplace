import "./Subscribe.css"
import Image from "next/image";
import astronavt from "../../img/kosmonavt.png"
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import InputSubs from "@/components/InputSubs/InputSubs";

const Subscribe = () => {
    return (
        <section className="subscribeSection">
            <div className="block">
                <Image src={astronavt} alt='' style={{marginRight: '80px'}}/>
                <div style={{width: '425px'}}>
                    <TextH1 style={{marginBottom: '10px', fontSize: '38px', fontWeight: '600'}}>Join our weekly digest</TextH1>
                    <TextP style={{marginBottom: '40px', fontSize: '22px'}}>Get exclusive promotions & updates straight to your inbox.</TextP>
                    <InputSubs/>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;