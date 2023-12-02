import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <div className="App">
        
            <Routes>
            <Route
             exact
            path="/"
            element={Users}>
            </Route>
            <Route
            exact path="/profile"
            element={UserProfile}
            ></Route>
            </Routes>
            
          
          {/* <Users /> */}
    </div>
  );
}

export default App;
