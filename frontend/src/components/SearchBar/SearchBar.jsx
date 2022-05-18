import React, { useState } from 'react';
import useCustomForm from "../../hooks/useCustomForm";
import { useNavigate, Link } from "react-router-dom";




const VideoSearch = (props) => {

    const [search, setSearch] = useState('');
    const [formData, handleInputChange, handleSubmit] = useCustomForm()
    const navigate = useNavigate();
   
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                Search{" "}
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                </label>
                <button onClick={() => navigate("/search")}>Search</button>
            </form>
        </div>
    );
}
export default VideoSearch;