


const contractAdd = '0x56C2e424Cca568e666189B4C1301703E261b813a';
const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "_Loan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Gwei",
          "type": "uint256"
        }
      ],
      "name": "_mintToken",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "hourss",
          "type": "uint256"
        }
      ],
      "name": "_repayLoan",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "NoofToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "transferTo",
          "type": "address"
        }
      ],
      "name": "_trasferToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "Wei",
          "type": "uint256"
        }
      ],
      "name": "_withDraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "noofToken",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "_withDrawToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_BRtoWei",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "_ViewBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "_ViewLoan",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_WeitoBR",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewFunds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const provider =  new ethers.providers.JsonRpcProvider('https://rpc.sepolia.org/');
const contract = new ethers.Contract(contractAdd , contractAbi , provider);


const submitwt = document.getElementById('wt');

submitwt.addEventListener('click' , async ()=>{
    const address = document.getElementById('wta').value;
    console.log(address)
    const not = +document.getElementById('wtn').value;
    const wallet = new ethers.Wallet('40eae0ddf700c5166b1488b5b55a5800221b08dbb194ec7a58eaf27c088a3c88' , provider);
    const usecontract = await contract.connect(wallet);
    const Totaltoken = await usecontract._ViewBalance(address);
    if(Totaltoken >= not){
        const tx = {from : "0xE1AA703F275D260fD9bD0CC93fb0A76c2Bfe1f9B"  , to : address , value : not*1000000000000000}
        const sendtx = await wallet.sendTransaction(tx);
        usecontract._withDrawToken(not , address).then(
            async()=>{wallet.signTransaction(tx).then(
                ()=>{alert('transection was successfull')}
                ).catch((e)=>{alert('error in transection ' + e)})}
            ).catch((e)=>{console.log(e)})
        console.log(sendtx)    
    }
    else{
        alert('insufficient ballance')
    }
    
})