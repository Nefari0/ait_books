import { StoreItemsContainer } from "./storeItem.styles";

export const StoreItem = ({el}) => {
    const { logo,link,name } = el
    return(
        <StoreItemsContainer href={link}>
                <img src={logo} />
        </StoreItemsContainer>
    )
}