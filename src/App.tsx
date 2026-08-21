import { stores } from './data/stores';
import { AppContainer, Library, BookImage, ReviewSection } from './app.styles';
import { StoreItem } from './Components/StoreItems/storeItem.component';
import Header from './Components/Header/header.component';
import bookandtablet from './assets/3d book and tablet.png';
import Player from './Components/VideoPlayer/video.component';
import { DesktopPlayerSection,MobilPlayerSection } from './Components/VideoPlayer/video.styles';
import { homeVideos } from './data/videos';
import { reviews } from './data/reviews';

function App() {
  const storeMap = stores.map((el, i) => {
    return <StoreItem key={i} el={el} />;
  });

  // VIDEOS

  const deskVideoMap = homeVideos.filter(el => el.mobile === false).map((el,i) => {
    const {styles,videoUrl,altImage} = el
    return <Player styles={styles} url={videoUrl} alt={altImage}/>
  })

  const mobileVideoMap = homeVideos.filter(el => el.mobile === true).map((el,i) => {
    const {styles,videoUrl,altImage} = el
    return <Player styles={styles} url={videoUrl} alt={altImage}/>
  })

  // REVIEWS

  const reviewMap = reviews.map((el,i) => {
    const { body, reviewer } = el
    return(
      <ReviewSection>
        <i>{body}</i>
        <footer>{reviewer}</footer>
      </ReviewSection>
    )
  })

  return (
    <AppContainer>
      <Header />
      <BookImage src={bookandtablet} />

      <MobilPlayerSection>
        {mobileVideoMap}
      </MobilPlayerSection>

      <DesktopPlayerSection>
        {deskVideoMap}
      </DesktopPlayerSection>

      {reviewMap}

      <Library>
        {storeMap}
      </Library>

    </AppContainer>
  );
}

export default App;
