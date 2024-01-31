import {useParams} from 'react-router-dom';
import {ListOfFilms} from "../../../shared/ListOfFilms";
import './FilmDetails.css'
import ReactPlayer from 'react-player';

export default function FilmDetails() {
    
    const {id} = useParams();

    const film = ListOfFilms.find(film => film.id === id)


    return (
        <div className="container">
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
            <div className="details-section">
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
            </div>
        </div>
    );
}
