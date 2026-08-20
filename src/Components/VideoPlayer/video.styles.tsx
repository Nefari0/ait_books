import styled from "styled-components";
import { desktop } from "../../app.styles";

export const DesktopPlayerSection = styled.section`
    width:100%;
    max-width:1500px;
    display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

    @media (max-width:${desktop}px) {
        display:none;
    }

    // background-color:blue;
`

export const MobilPlayerSection = styled(DesktopPlayerSection)`
    flex-direction:column;

    @media (min-width:${desktop}px) {
        display:none;
    }

    @media (max-width:${desktop}px) {
        display:flex;
    }
`

export const PlayerContainer = styled.div`
    margin:5px;

    @media (min-width:750px) {
        // width:100%;
    }

    @media (max-width:${desktop}px) {
        min-width:90%;
    }
`

export const VideoError = styled.img`
    wdith:${({width}) => width}px;
    height:${({height}) => height}px;
`