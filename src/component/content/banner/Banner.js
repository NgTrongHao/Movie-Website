import './Banner.css'
import {useEffect, useState} from "react";
import {VideoPlayer} from "./VideoPlayer";

export function Banner() {

    const [shrinkBanner, setShrinkBanner] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const imageUrl = 'https://i.ytimg.com/vi/32RAq6JzY-w/maxresdefault.jpg';
        const videoUrl = 'https://www.youtube.com/watch?v=SAhlmquynBY';

        setImageUrl(imageUrl);
        setVideoUrl(videoUrl);

        const shrinkTimer = setTimeout(() => {
            setShrinkBanner(true);
        }, 2500);

        return () => clearTimeout(shrinkTimer);
    }, []);

    const handleVideoEnd = () => {
        setIsHovered(false);
    };

    return (
        <header
            className={`banner ${shrinkBanner ? 'banner--shrink' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Fast X</h1>
                {/*<div className="banner_buttons">*/}
                {/*    <button className="banner_button">Play</button>*/}
                {/*    <button className="banner_button">My List</button>*/}
                {/*</div>*/}
                <h1 className="banner_description">
                    Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.
                </h1>
            </div>
            <VideoPlayer videoUrl={videoUrl} isHovered={isHovered} onVideoEnd={handleVideoEnd} />
            <div className="banner--fadeBottom"></div>
        </header>
    );
}
