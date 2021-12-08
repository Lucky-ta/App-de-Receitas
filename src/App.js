import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProvider from './context/MyProvider';
import Routes from './routes/Routes';

function App() {
  return (
    <MyProvider>
      <Routes />
      <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div>
    </MyProvider>
  );
}

export default App;
