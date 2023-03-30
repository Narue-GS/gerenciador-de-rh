import "../styles/header.css"
import { GoThreeBars } from 'react-icons/go';

const Header = ({permissions}) => {
  const dropOptions = () =>{
    let options = document.querySelector(".options").style
		options.display != "flex" ?	options.display = "flex" : options.display = "none"
	}
    return(
        <header id="home-header">
            <div id="home-more" onClick={dropOptions}>
                <GoThreeBars color="white" fontSize="clamp(0.5rem, 0.75vw + 0.75em, 3em)"/>
            </div>
            <div className="options">
                  {permissions.includes(1) ? <button>Contratar</button> : <></>}
                  {permissions.includes(2) ? <button>Alçadas</button> : <></>}
                  {permissions.includes(3) ? <button>Permissões</button> : <></>}
            </div>
        </header>
    )
}

export default Header;
