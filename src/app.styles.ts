// import styled from "styled-components";
import styled from "styled-components";

export const query1 = `max-width:550px`

export const AppContainer = styled.main`
    min-height:100vh;
    width:100vw;

    // background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Ffirestorm?alt=media&token=641026dc-9496-440b-8703-69b8abe24e94);
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Fait_1?alt=media&token=5d6afd7e-b3e6-401f-baee-e0eac98df2a1);

    display: flex;
    flex-direction:column;
	flex-wrap: wrap;
    justify-content: space-between;
	align-items: center;
	align-content: center;

    @media (max-width:650px) {
        flex-direction:column;
    }
`

export const Library = styled.div`
    min-height:300px;
    max-width:1500px;
    margin:10px;
    display:flex;
    background: rgba(74, 74, 74, 0.5);
    border-radius:5px;
    display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	align-content: center;
`

export const BookImage = styled.img`
    height:300px;
    right:100px;

    @media (max-width:400px) {
        width:100%;
        height:auto;
    }
`

export const ReviewSection = styled.blockquote`
    min-height:100px;
    max-width:1500px;
    border-radius:5px;
    padding:10px;
    margin:10px;
    background: rgba(74, 74, 74, 0.5);
    i {
        // padding:30px;
        color:#fff;
    }

    footer {
        margin:10px;
        color:#fff;
    }
`