import ReactPlayer from 'react-player';
import './VideoPlayer.css'

export function VideoPlayer({videoUrl, isHovered, onVideoEnd}) {
    return (
        isHovered && (
            <div className="video-player-wrapper">
                <ReactPlayer
                    url={videoUrl}
                    playing={true}
                    volume={1}
                    muted={false}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    controls={true}
                    onEnded={onVideoEnd}
                />
            </div>
        )
    );
}
