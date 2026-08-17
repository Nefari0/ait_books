import styled from "styled-components";

export const DesktopPlayerSection = styled.section`
    width:100%;
    max-width:1500px;
    display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

    @media (max-width:750px) {
        display:none;
    }
`

export const MobilPlayerSection = styled(DesktopPlayerSection)`
    flex-direction:column;

    @media (min-width:750px) {
        display:none;
    }

    @media (max-width:750px) {
        display:flex;
    }
`

export const PlayerContainer = styled.div`
    margin:5px;

    @media (min-width:750px) {
        width:100%;
    }

    @media (max-width:750px) {
        min-width:90%;
    }
`