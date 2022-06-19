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
import { HistoryProvider } from "./Context/history-context";
import { ToastProvider } from "./Context/toast-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <DataProvider>
          <AuthProvider>
            <WatchLaterProvider>
              <LikeProvider>
                <PlaylistProvider>
                  <HistoryProvider>
                    <App />
                  </HistoryProvider>
                </PlaylistProvider>
              </LikeProvider>
            </WatchLaterProvider>
          </AuthProvider>
        </DataProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
