
const fs = require('fs');
const solc = require('solc');
const Xdc3 = require('xdc3');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const getWeb3 = () => {
  console.log("Iam here 1")
  return new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          console.log("Iam here 2")
          try {
              // Request account access if needed
              await ethereum.enable();
              // Acccounts now exposed
              await window.ethereum.request({ method: "eth_requestAccounts" });
              console.log("Iam here 3")

              resolve(web3);
          } catch (error) {
              // User denied account access...
          }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        console.log("Iam here 3")

          window.web3 = new Web3(web3.currentProvider);
      }
      // Non-dapp browsers...
      else {
          console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
    });
  });
};

const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    return window.web3;
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    return window.web3;
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

