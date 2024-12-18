import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import MainPage from './Views/MainPage';
import Login from './Views/Login';


function App({solanaConfig, walletConnection, currentUser}) {
  return (
    <div className="App" >
        <MainPage
          solanaConfig = {solanaConfig}
          walletConnection = {walletConnection}
          currentUser = {currentUser}
          />
        
    </div> 
  );
}

export default App;
