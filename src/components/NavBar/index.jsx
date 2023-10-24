import { Link, Route, Routes } from "react-router-dom"
import './NavBar.css'
export default function NavBar() {
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                </ul>
            </nav>
        </div>
    );
}