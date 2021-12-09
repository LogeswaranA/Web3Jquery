


const deployContract = async (web3, accounts,solc) => {


  let abi, bytecode;
  $("#abi").on("change", (e) => {
      abi = e.target.value;
  });
  $("#bytecode").on("change", (e) => {
      bytecode = e.target.value;
  });
  $("#deploy").on("click", async (e) => {
      e.preventDefault();
      console.log("Solc",solc)
      let deploy_contract = new web3.eth.Contract(JSON.parse(abi));
      let payload = {
          data: bytecode
      }
      let parameter = {
          from: accounts[0],
          gas: web3.utils.toHex(800000),
          gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei'))
      }
      await deploy_contract.deploy(payload).send(parameter, (err, transactionHash) => {
          console.log('Transaction Hash :', transactionHash);
      }).on('confirmation', function (confirmationNumber, receipt) {
          console.log("receipt", confirmationNumber, receipt)
          }).then(function (newContractInstance) {
                  console.log(newContractInstance) // instance with the new contract address
          });
  });
};



async function nodeOperatorApp() {
  const web3 = await loadWeb3();
  console.log("Web3", web3);
  const accounts = await web3.eth.getAccounts();
  console.log("accounts", accounts);

  deployContract(web3,accounts,solc);
}

nodeOperatorApp();
