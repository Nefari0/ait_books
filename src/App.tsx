import { stores } from './stores';
import { AppContainer, Library, BookImage } from './app.styles';
import { StoreItem } from './Components/StoreItems/storeItem.component';
import Header from './Components/Header/header.component';
import bookandtablet from './3d book and tablet.png';
import Player from './Components/VideoPlayer/video.component';
import { DesktopPlayerSection,MobilPlayerSection } from './Components/VideoPlayer/video.styles';

function App() {
  const storeMap = stores.map((el, i) => {
    return <StoreItem key={i} el={el} />;
  });

  return (
    <AppContainer>
      <Header />
      <BookImage src={bookandtablet} />

      <MobilPlayerSection>
        <Player 
          styles={{
            width:'100%',
            height:'300px'
          }} 
          url={'https://vimeo.com/1218748341'}
        />
        <Player 
          styles={{
            width:'100%',
            height:'700px'
          }} 
          url={'https://vimeo.com/1205169300'}
        />
      </MobilPlayerSection>

      <DesktopPlayerSection>
        <Player 
          styles={{
            width:'100%',
            height:'700px'
          }} 
          url={'https://vimeo.com/1218770160'}
        />
        <Player 
          styles={{
            width:'100%',
            height:'700px'
          }} 
          url={'https://vimeo.com/1205169300'}
        />
      </DesktopPlayerSection>

      <Library>
        {storeMap}
      </Library>

    </AppContainer>
  );
}

export default App;
