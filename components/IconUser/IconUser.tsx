import Image from "@/node_modules/next/image";

interface IconUserProps {
    imgUrl: any;
}

const IconUser = ({imgUrl}: IconUserProps) => {
    return (
        <>
            <Image className="iconUser" src={imgUrl} alt="" />
        </>
    )
}

export default IconUser;