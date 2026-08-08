import { stores } from './stores';
import { AppContainer, Library, BookImage } from './app.styles';
// import { StoreItem } from './Components/StoreItems/storeItem.component';
import { StoreItem } from './Components/StoreItems/storeItem.component';
import Header from './Components/Header/header.component';
import bookandtablet from './3d book and tablet.png';

function App() {
  const storeMap = stores.map((el, i) => {
    return <StoreItem key={i} el={el} />;
  });

  return (
    <AppContainer>
      <Header />
      <BookImage src={bookandtablet} />
      <Library>
        {storeMap}
      </Library>
    </AppContainer>
  );
}

export default App;
