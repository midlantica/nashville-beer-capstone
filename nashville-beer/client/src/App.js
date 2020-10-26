import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";

function App() {
  return (
    <Router>
        <UserProfileProvider>
          <Header />
          <div className="container mt-3">
            <ApplicationViews />
          </div>
        </UserProfileProvider>
    </Router>
  );
}

export default App;
