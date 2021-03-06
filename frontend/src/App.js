// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from './components/SearchBar/SearchBar';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App(props) {
  useEffect(() => {
    getAllVideos(); 
    }, [])

    async function getAllVideos(){
        try{
            let response = await axios.get('');
            console.log(response.data);

        } catch (ex) {
            console.log('error');
        }    
    }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <VideoPlayer/>
              <SearchBar/>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// AIzaSyC9w1EFmMlW79g-oD-o7j06Hm-xiqOEBkM
// https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE}