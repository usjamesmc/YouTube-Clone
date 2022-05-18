import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q={post malone}&key={AIzaSyC9w1EFmMlW79g-oD-o7j06Hm-xiqOEBkM}");
        setVideos(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, []);
  return (
    <div className="container">
      <h1>Search Page</h1>
      {videos &&
        videos.map((video) => (
          <p key={video.id}>

          </p>
        ))}
    </div>
  );
};

export default SearchPage;