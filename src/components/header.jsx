import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
    const iconStyle = {}
    return(
        <header id="home-header">
            <div id="home-more">
                <GoThreeBars color="white" fontSize="clamp(0.5rem, 0.75vw + 0.75em, 3em)"/>
            </div>
        </header>
    )
}

export default Header;