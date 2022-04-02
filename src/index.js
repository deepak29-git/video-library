import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Context/auth-context";
import { WatchLaterProvider } from "./Context/watch-leter-context";
import { LikeProvider } from "./Context/like-context";
import { PlaylistProvider } from "./Context/platlist-context";
import { DataProvider } from "./Context/data-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <WatchLaterProvider>
            <LikeProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </LikeProvider>
          </WatchLaterProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
