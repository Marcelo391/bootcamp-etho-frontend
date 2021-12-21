import React from 'react';
 import logo from './logo.svg';
import Login from './screens/login/login.screen';
import { Routes , Route } from 'react-router-dom';
 import './App.css';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';

function App() {
  return (
    <ThemeProvider theme={theme} >
    <div className='myApp'>
      <Routes >
        <Route path={LoginPath} element={<Login />} />
      </Routes>      
    </div>
    </ThemeProvider>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
