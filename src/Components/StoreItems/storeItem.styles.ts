import styled from "styled-components"

export const StoreItemsContainer = styled.a`
    width:200px;
    height:60px;
    padding-top:10px; 
    padding-bottom: 10px;
    border-radius:5px;
    position: relative;   
    margin:10px;
    cursor: pointer;
    display:flex;
    justify-content: center;
	align-items: center;
    background-color:#fff;
    opacity:1;

    img {
        max-width:200px;
    }

    @media (max-width:460px) {
        width:90%;
        justify-content: center;
    }
`