import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = (props) => {

    return(
        <div>
            <iframe src={`https://www.youtube.com/embed/watch?v=gwkqL8PhCXA`}></iframe>
        </div>
    )
}
export default VideoPlayer