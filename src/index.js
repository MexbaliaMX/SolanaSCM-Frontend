import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Wrapper from "./Components/Wraper";
import * as nearAPI from "near-api-js";
import getConfig from "./config";

async function initNear() {
  const solanaConfig = getConfig(process.env.NEAR_ENV || "testnet");
  // create a keyStore for signing transactions using the user's key
  // which is located in the browser local storage after user logs in
  const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();

  // Initializing connection to the NEAR testnet
  const near = await nearAPI.connect({ keyStore, ...solanaConfig });
  
  // Initialize wallet connection
  const walletConnection = new nearAPI.WalletConnection(near);
  // Load in user's account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = walletConnection.getAccountId();
  }
  return {solanaConfig, walletConnection, currentUser };

}

const root = ReactDOM.createRoot(document.getElementById("root"));

initNear().then(({ solanaConfig, walletConnection, currentUser }) => {
  root.render(
    <Wrapper>
      <App 
      solanaConfig = {solanaConfig}
      walletConnection = {walletConnection}
      currentUser = {currentUser}/>
    </Wrapper>
  );
});
