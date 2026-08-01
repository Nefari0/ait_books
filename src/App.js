import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import { stores } from './stores';
import { AppContainer,Library,BookCoverContainers } from './app.styles';
import { StoreItem } from './Components/StoreItems/storeItem.component';

function App() {

  // console.log(stores)

  const storeMap = stores.map((el,i) => {
    // console.log(el)
    return(
      <StoreItem key={i} el={el}/>
    )
  })
  return (
    <AppContainer>
      {/* <header>
      </header> */}
        <BookCoverContainers>
          <img src={'https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2FAIT_front_cover?alt=media&token=0778b1da-004d-4daf-ac0e-d6c45cfc560e'}/>
      
        </BookCoverContainers>
        <Library>
          {storeMap}
        </Library>
      
    </AppContainer>
  );
}

export default App;
