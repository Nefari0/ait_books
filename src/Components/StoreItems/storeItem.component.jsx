import { StoreItemsContainer } from "./storeItem.styles";

export const StoreItem = ({el}) => {
    const { logo,link,name } = el
    console.log(name)
    return(
        <StoreItemsContainer>
            <a href={link}>
                <img src={logo} />
            </a>
        </StoreItemsContainer>
    )
}