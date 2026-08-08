import { HeaderContainer,AuthorLink } from "./header.styles";

function Header() {
  return (
    <HeaderContainer>
        <AuthorLink 
            href="https://chris.madmodels3d.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
            By Chris deMontigny
        </AuthorLink>

        <div>
            <a
                href="https://www.instagram.com/chris_demontigny/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" />
            </a>

            <a 
                href="https://www.facebook.com/profile.php?id=61585180094302"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="https://cdn-icons-png.flaticon.com/512/13051/13051733.png"/>
            </a>
        </div>
    </HeaderContainer>
  );
}

export default Header