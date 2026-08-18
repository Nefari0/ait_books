import styled from "styled-components";
import { query1 } from "../../app.styles";

export const HeaderContainer = styled.header`
    width:100vw;
    height:100px;
    position:sticky;
    top:0;
    z-index:1;
    background: rgba(74, 74, 74, 1);
    display:flex;
    justify-content: space-around;
	align-items: center;

    a {
        cursor:pointer;
        text-decoration:none;
        margin:5px;
    }
`

export const SocialMediaIcons = styled.img`
    width:50px;

    @media (${query1}) {
        width:25px;
    }
`

export const AuthorImage = styled.div`
    width:50px;
    height:50px;
    // height:auto;
    border-radius:50%;
    background-color:blue;
    overflow:hidden;
    position:relative;
    margin:10px;
    
    @media (max-width:304px) {
        width:35px;
        height:35px;
    }

    img {
        height:100%;
        left:-10px;
        position:absolute;

        @media (max-width:304px) {
            left:-5px;
        }
    }
`

export const AuthorLink = styled.a`
    font-family: "Cormorant Garamond", serif;
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0.05em;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s ease;

    display:flex;
    align-items: center;

`