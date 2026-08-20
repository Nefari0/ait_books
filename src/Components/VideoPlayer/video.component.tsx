
import { useState } from 'react';
import { PlayerContainer,VideoError } from './video.styles';
import ReactPlayer from "react-player";

type PlayerProps = {
    alt?:string;
    url:string;
    styles:{
        width:string
        height:string
    };
}


const Player = ({url,styles,alt}:PlayerProps) => {
    const [error,setError] = useState(false)
    const {height,width} = styles
    return (
        <PlayerContainer>
            {error ? 
            <VideoError
                src={alt}
                width={width}
                height={height}
            />
            :
            <ReactPlayer
                src={`${url}?fullscreen=1`}
                width={width}
                height={height}
                controls
                playsInline
                onError={() => setError(true)}
            />          
            }
        </PlayerContainer>
    )
}

export default Player