import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom';
import './App.css'

import ShowNavBar from "./logics/ShowNavBar"
import Navbar from "./components/Navbar_Com";
import Header from "./components/Header";


import 'bootstrap/dist/css/bootstrap.min.css';

import routes from './routes/menu';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ShowNavBar>
          <Navbar />
          <Header />
        </ShowNavBar>
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
