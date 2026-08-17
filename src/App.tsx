import { stores } from './stores';
import { AppContainer, Library, BookImage, ReviewSection } from './app.styles';
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

      <ReviewSection>
        <i>
          You forget how many countries and how many people were affected by WW2. This story being told by a Grandmother sharing her recollection as a young girl during WW2 and all of the atrocities that her and her family had to endure was well written by her Grandson. Most WW2 stories I’ve read have been more about the people serving in the war. It was very interesting to read something from a child living through the war,escaping and starting a new life in a new country. Very good read.
        </i>
        <footer>— J B Toast · Amazon</footer>
      </ReviewSection>

      <ReviewSection>
        <i>
          I highly recommend Adrift in Tyranny, it is very well written, and it puts WW2 and the challenges families had to go through into a clearer perspective for me. I love that it's written about the authors own grandmother and her family, it adds authenticity to the struggles people had to go through, because of the evil deeds of inhumane dictators and their lackeys.
        </i>

        <footer>— BMont · Amazon</footer>
      </ReviewSection>

      <ReviewSection>
        <i>
          Adrift in Tyranny is a true story based on the real experiences of the author's grandmother as a child during World War II. Caught in the middle of war between Russia and Germany, the family miraculously survives bombings and near starvation. It is well-written and definitely gives a clearer picture of that period of time in history. I highly recommend it.
        </i>

        <footer>— Phyllis Hunt · Amazon</footer>
      </ReviewSection>

      <Library>
        {storeMap}
      </Library>

    </AppContainer>
  );
}

export default App;
