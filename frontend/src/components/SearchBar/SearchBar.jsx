import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const SearchBar = () => {

    
    return(
        <div>
            <form>
            <div>
                <button type='submit'>Search</button>
                <Link to="/search">Click to register!</Link>
            </div>
            </form>
        </div>
    );
}
export default SearchBar;