import React, { useRef, useState } from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div>
            <video
                ref={videoRef}
                width="100%"
                controls={false}
            >
                <source src="/LisaBirthday/35228.mp4" type="video/mp4"/>

                Your browser does not support the video tag.
            </video>

            {!isPlaying ? (
                <button onClick={handlePlay}>Play</button>
            ) : (
                <button onClick={handlePause}>Pause</button>
            )}
        </div>
    );
};

export default VideoPlayer;
