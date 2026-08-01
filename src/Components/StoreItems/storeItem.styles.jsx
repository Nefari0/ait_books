import styled from "styled-components"

export const StoreItemsContainer = styled.div`
    width:200px;
    height:60px;
    padding-top:10px; 
    padding-bottom: 10px;
    // box-shadow: rgb(204, 204, 204) 0px 0px 10px 0px;
    border-radius:5px;
    position: relative;   
    margin:10px;
    cursor: pointer;
    display:flex;
    background-color:#fff;
    opacity:1;

    img {
        width:200px;
    }

    @media (max-width:460px) {
        width:90%;
        justify-content: center;
    }
`