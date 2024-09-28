import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";

import Header from "./component/Header";
import { VideoProvider } from "./context/VideoContext";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <VideoProvider>
              <Feed />
            </VideoProvider>
          }
        />
        <Route path="/watch" element={<Detail />} />
        <Route
          path="/results"
          element={
            <VideoProvider>
              <SearchResult />
            </VideoProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
