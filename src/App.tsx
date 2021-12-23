import React from 'react';
 import logo from './logo.svg';
import Login from './screens/login/login.screen';
import { Routes , Route } from 'react-router-dom';
 import './App.css';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        {/* <div className='myApp'> */}
          <GlobalStyle />
          <Routes >
            <Route path={LoginPath} element={<Login />} />
          </Routes>      
        {/* </div> */}
      </ThemeProvider>    
    </Provider>
   
  );
}

export default App;
