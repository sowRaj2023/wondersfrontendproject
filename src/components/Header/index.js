import {Link} from "react-router-dom"
import "./index.css"


const Header = () => (
    <nav className="nav-header">
        <div className="wonder-container">
            <h1 className="wonder-title">Seven Wonders of the World</h1>
            <ul className="nav-menu">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                <Link to="/about" className="nav-link">About</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header