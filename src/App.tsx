import React, { useEffect } from 'react';
//  import logo from './logo.svg';
import Login from './screens/login/login.screen';
import { Routes , Route, useNavigate } from 'react-router-dom';
import './App.css';
import { LoginPath } from './screens/login/login.types';
import { ThemeProvider } from 'styled-components';
import theme from './themes/main/theme';
import { GlobalStyle } from './themes/main/global-style';
import { Provider } from 'react-redux';
import store from './store/store/store';
import { HomePath } from './screens/home/home.types';
import Home from './screens/home/home.screen';
import UserGuard from './components/routers/user-guard/user.guard.componet';

function App() {

  // const navigate = useNavigate();

  // useEffect(
  //   () => {
  //     navigate(HomePath);
  //   },
  //   []
  // )

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        {/* <div className='myApp'> */}
          <GlobalStyle />
          <Routes >
            <Route path={LoginPath} element={<Login />} />
            {/* <Route path={HomePath} element={<Home />} /> */}
            <Route path={HomePath} element={ <UserGuard> <Home /> </UserGuard>} />
          </Routes>      
        {/* </div> */}
      </ThemeProvider>    
    </Provider>
   
  );
}

export default App;
