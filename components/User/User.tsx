import PostText from "../PostText/PostText";
import UserRow from "../UserRow/UserRow";


interface userProps {
    postText: string;
    stylePostText: React.CSSProperties;
    userRow: string;
    styleUserRow: React.CSSProperties;
    src: any;
}

const User = ({postText, stylePostText, userRow, styleUserRow, src}: userProps) => {
    return (
        <>
            <PostText style={stylePostText}>{postText}</PostText>
            <UserRow style={styleUserRow} src={src}>{userRow}</UserRow>
        </>
    )
}

export default User;