import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import Web3Modal from "web3modal";


import { fetchData } from "../data/dataActions";

import { toast } from "react-toastify";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();

    const providerOptions = {
      /* See Provider Options Section */
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "The Titan Clash", // Required
          infuraId: "bb6fd729a4894ed6aecc8b83ac02b816", // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 1, // Optional. It defaults to 1 if not provided
          darkMode: true // Optional. Use dark theme, defaults to false
        }
      },
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "bb6fd729a4894ed6aecc8b83ac02b816" // required
        }
      },
      // metamask: {
      //   // package: WalletConnectProvider, // required
      //   // options: {
      //   //   infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
      //   // }
      // }
    };
    
    const web3Modal = new Web3Modal({
      // network: "testnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: "dark"
    });
    const selectedNetworkId=1;
    const provider = await web3Modal.connect();
  
    // const { ethereum } = window;
    // const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    // if (metamaskIsInstalled) {
      Web3EthContract.setProvider(provider);
      const web3 = new Web3(provider);
      try {
        // const accounts = await provider.request({
        //   method: "eth_requestAccounts",
        // });
       
        // const networkId = await provider.request({
        //   method: "net_version",
        // });
        const accounts = await web3.eth.getAccounts()
        const networkId = await web3.eth.net.getId()
        console.log(accounts)
        console.log(networkId)
        if (networkId == selectedNetworkId) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );

          toast.success("Connected!");

          // Add listeners start
          // ethereum.on("accountsChanged", (accounts) => {
          //   dispatch(updateAccount(accounts[0]));
          // });
          // ethereum.on("chainChanged", () => {
          //   window.location.reload();
          // });

          // provider.on("accountsChanged", (accounts) => {
          //   dispatch(updateAccount(accounts[0]));
          // });
          
          // Subscribe to chainId change
          // provider.on("chainChanged", (chainId) => {
          //   window.location.reload();
          // });
          
          // Add listeners end
        } else {
          toast.error(`Change network to ${CONFIG.NETWORK.NAME}.`);
        }
      } catch (err) {
        console.log(err)
        toast.error("Something went wrong.");
      }
    // } else {
    //   // toast.error("Install Metamask.");
    //   window.location.href='https://metamask.app.link/dapp/basquimfers.com/'
    // }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};