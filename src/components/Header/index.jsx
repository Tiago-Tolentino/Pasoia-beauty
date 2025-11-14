import "./header.scss"
import logo from "../../images/logo passoia.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo marca da pagina" />
            <ul>
                <li>LOOKS</li>
                <li>LANCAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}

export default Header;