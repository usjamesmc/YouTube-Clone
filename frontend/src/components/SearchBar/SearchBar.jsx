import React, { useState } from 'react';


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
            </div>
            </form>
        </div>
    );
}
export default VideoSearch;