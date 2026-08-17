
import { PlayerContainer } from './video.styles';
import ReactPlayer from "react-player";

type PlayerProps = {
    url:string;
    styles:{
        width:string
        height:string
    };
}

const Player = ({url,styles}:PlayerProps) => {
    const {height,width} = styles
    return (
        <PlayerContainer>
            <ReactPlayer
                src={`${url}?fullscreen=1`}
                width={width}
                height={height}
                controls
                playsInline
            />          
        </PlayerContainer>
    )
}

export default Player