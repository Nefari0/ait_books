import { StoreItemsContainer } from './storeItem.styles';

type StoreItemProps = {
  el: {
    logo: string;
    link: string | null;
    name: string;
  };
};

export const StoreItem = ({ el }: StoreItemProps) => {
  const { logo, link, name } = el;

  return (
    <StoreItemsContainer href={link ?? undefined}>
      <img src={logo} alt={name} />
    </StoreItemsContainer>
  );
};
