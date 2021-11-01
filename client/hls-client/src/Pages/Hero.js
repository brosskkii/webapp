import React from "react";
import ReactPlayer from 'react-player'

const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div>
            <h1>RTSP Camera Streaming</h1>
            URL : http://localhost:4000/index.m3u8
            <ReactPlayer
            width='960px'
            height='480px' 
            controls 
            url='http://localhost:4000/index.m3u8' 
            playing={true} />
            </div>
        </section>
    );
};

export default Hero;