import { HeaderContainer,AuthorLink,SocialMediaIcons,AuthorImage } from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
            
        <AuthorLink 
            href="https://chris.madmodels3d.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
        <AuthorImage>
           <img src={"https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Fc_demontigny?alt=media&token=782d914e-3cda-4402-bd68-aa30ed57b6bd"} />
        </AuthorImage> 
            By Chris deMontigny
        </AuthorLink>

        <div>
            <a
                href="https://www.instagram.com/chris_demontigny/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialMediaIcons src="https://cdn-icons-png.flaticon.com/128/174/174855.png" />
            </a>

            <a 
                href="https://www.facebook.com/profile.php?id=61585180094302"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialMediaIcons src="https://cdn-icons-png.flaticon.com/512/13051/13051733.png"/>
            </a>
        </div>
    </HeaderContainer>
  );
}

export default Header