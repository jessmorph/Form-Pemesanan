import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
  
} from 'react-router-dom';
import './App.css'

import Navbar from "./templates/Navbar_Com";


import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes/menu';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
        
          {routes.map((route, idx, props) =>
            <Route
              path={route.path}
              element={<route.element />}
              key={idx}
              {...props}
            />
          )}
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
