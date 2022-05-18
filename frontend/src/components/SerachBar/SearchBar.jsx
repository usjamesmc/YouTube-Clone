import React, { useState } from 'react';
import { Link } from "react-router-dom";


const VideoSearch = (props) => {

    // const [search, setSearch] = useState('');
   
    return(
        <div className='border-box'>
            <form>
            <div>
                <label>Search</label>
            </div>
            <div>
                <input type='text'/>
            </div>
            <div>
                <button type='submit'>Search</button>
                <Link to="/search">Click to register!</Link>
            </div>
            </form>
        </div>
    );
}
export default VideoSearch;