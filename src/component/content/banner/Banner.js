import './Banner.css'
import {useEffect, useState} from "react";
import {VideoPlayer} from "./VideoPlayer";

export function Banner() {

    const [shrinkBanner, setShrinkBanner] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [shouldPlay, setShouldPlay] = useState(false);

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

    const handleMouseEnter = () => {
        // Wait for 500 milliseconds (0.5 second) before starting the video
        const playTimer = setTimeout(() => {
            setIsHovered(true);
            setShouldPlay(true);
        }, 500);

        return () => clearTimeout(playTimer);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Ensure that the video stops when leaving, you can adjust the delay if needed
        setTimeout(() => {
            setShouldPlay(false);
        }, 500);
    };

    return (
        <header
            className={`banner ${shrinkBanner ? 'banner--shrink' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="banner_contents">
                <h1 className="banner_title">Fast X</h1>
                <h1 className="banner_description">
                    Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.
                </h1>
            </div>
            <VideoPlayer videoUrl={videoUrl} isHovered={isHovered && shouldPlay} onVideoEnd={handleVideoEnd} />
            <div className="banner--fadeBottom"></div>
        </header>
    );
}
