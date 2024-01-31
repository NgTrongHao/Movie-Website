import {useParams} from 'react-router-dom';
import {ListOfFilms} from "../../../shared/ListOfFilms";
import './FilmDetails.css'
import ReactPlayer from 'react-player';
import {useContext} from "react";
import {ThemeContext} from "../../theme/ThemeContext";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function FilmDetails() {

    const { id } = useParams();
    const { theme, toggle, dark } = useContext(ThemeContext);
    const film = ListOfFilms.find((film) => film.id === id);

    return (
        <div className={`container ${theme}`}>
            <div className="video-section">
                <ReactPlayer
                    url={film.trailer}
                    playing={true}
                    volume={1}
                    controls={true}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={`details-section ${dark ? 'dark-mode' : 'light-mode'}`}>
                <h2>{film.title}</h2>
                <div className="info">
                    <p>
                        <strong>Year:</strong> {film.year}
                    </p>
                    <p>
                        <strong>Nation:</strong> {film.nation}
                    </p>
                    <p>
                        <strong>Description:</strong> {film.description}
                    </p>
                </div>
                {/*<button onClick={toggle} className="toggle-theme-btn">*/}
                {/*    Switch to {!dark ? 'Dark' : 'Light'} mode*/}
                {/*</button>*/}
                <IconButton
                    onClick={toggle}
                    color="primary"
                    aria-label="toggle-theme"
                    style={{color: 'red'}}
                >
                    {dark ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
            </div>
        </div>
    );

}
