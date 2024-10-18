import React, { useRef } from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div>
            <video ref={videoRef} width="100%" controls>
                <source src="/LisaBirthday/35228.mp4" type="video/mp4"/>
                <source src="/LisaBirthday/35228.webm" type="video/webm"/>
                <source src="/LisaBirthday/35228.ogv" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
