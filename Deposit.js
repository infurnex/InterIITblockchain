// contarct address - 0xeDC76405DA2e709b961D61A2AC3386730FF3a17F
// bank address - 0xE1AA703F275D260fD9bD0CC93fb0A76c2Bfe1f9B

// d24ef336a6afd242eb673204a72828f5a5af0eabfb9cca981105d5b820220b2d


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

const submitfc = document.getElementById('sbfc');
const viewBalance = document.getElementById('vb');
const submitgt = document.getElementById('uabt');


submitgt.addEventListener('click' , async()=>{
    const key = document.getElementById('uwa').value;
    const amount = +document.getElementById('ua').value;
    const wallet = new ethers.Wallet(key , provider);
    console.log(wallet)
    const contractwithsigner = contract.connect(wallet);
    const tx = await contractwithsigner._mintToken(amount , {value : amount*1000000000000000});
    alert('transection was successfull')
    console.log(tx);
})

submitfc.addEventListener('click' , async ()=>{
    const walletAddress = document.getElementById('uwafc').value;
    const data = await contract._ViewBalance(walletAddress)
    viewBalance.className = 'show'
    viewBalance.innerHTML = 'Bank Currency Token - ' + data.toString();
})

