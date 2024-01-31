import {Link} from 'react-router-dom';
import './Navigation.css'

export function Navigation() {
    return (
        <div className="navbar-container">
                <Link to="/" className="logo">
                        <img src={"assets/images/netflix.svg"} alt={"Netflix Logo"}/>
                </Link>
                <Link to="/" className="button-tertiary button-tertiary-active">Home</Link>
                <Link to="/series" className="button-tertiary">Series</Link>
                <Link to="/films" className="button-tertiary">Films</Link>
                <Link to="/latest" className="button-tertiary">Latest</Link>
                <Link to="/my-list" className="button-tertiary">My List</Link>
        </div>
    )
}
