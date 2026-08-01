import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { stores } from './stores';
import { AppContainer,Library,BookCoverContainers,BookImage  } from './app.styles';
import { StoreItem } from './Components/StoreItems/storeItem.component';
// import book from './3d_book.png'
// import tablet from './3d_tablet.png'
import bookandtablet from './3d book and tablet.png'

function App() {

  const storeMap = stores.map((el,i) => {
    return(
      <StoreItem key={i} el={el}/>
    )
  })
  return (
    <AppContainer>
        <BookImage src={bookandtablet}/>
        <Library>
          {storeMap}
        </Library>
      
    </AppContainer>
  );
}

export default App;
