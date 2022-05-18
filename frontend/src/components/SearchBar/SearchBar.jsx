import React, { useState, useEffect } from 'react';
import useCustomForm from "../../hooks/useCustomForm";



const SearchBar = () => {

    
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                Search{" "}
                <input
                    type="text"
                    value={formData.videoSearch}
                    onChange={handleInputChange}
                />
                </label>
                <button onClick={filterVideos()}>Search</button>
            </form>
        </div>
    );
}
export default SearchBar;