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

`

export const MobilPlayerSection = styled(DesktopPlayerSection)`
    flex-direction:column;

    @media (min-width:${desktop}px) {
        display:none;
    }

    @media (max-width:${desktop}px) {
        display:flex;
        align-items: center;
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

// wdith:${({width}) => width}px;
// height:${({height}) => height}px;
export const VideoError = styled.img`
    width:300px;
    margin:auto;
`