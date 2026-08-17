import styled from "styled-components";

export const DesktopPlayerSection = styled.section`
    width:100%;
    display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`

export const MobilPlayerSection = styled(DesktopPlayerSection)`
    flex-direction:column;
`

export const PlayerContainer = styled.div`
    // z-index:100000000;

    width:290px;
    // min-width:290px;
    // max-width:400px;
    margin:5px;
    // background-color:blue;
    // height:100%;
    // height:700px;
    // opacity:.5;
`