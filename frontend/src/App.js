// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import React, { useState } from 'react';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import VideoSearch from "./components/SerachBar/SearchBar";
import { useEffect } from "react";

function App() {
  const [searchedVideos, setSearchedVideos] = useState([]);

    useEffect(() => {
      getSearchedVideos()
    }, [])

  async function getSearchedVideos(){

    let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q={searchWord}&key=AIzaSyDwtmKf0fRc0m6RmoLMbdgR3-r9F0AGMXY&part=snippet');
    console.log(response.data.items)
    setSearchedVideos(response.data.items)
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
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
 }


export default App;