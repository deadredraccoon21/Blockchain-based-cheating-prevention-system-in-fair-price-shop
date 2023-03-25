const abi = JSON.parse(`[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "familyMember",
				"type": "string"
			}
		],
		"name": "addFamilyMem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			}
		],
		"name": "delCust",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "familyMember",
				"type": "string"
			}
		],
		"name": "deleteFamily",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deleteItems",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "delReq",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "y",
				"type": "address"
			}
		],
		"name": "distribute",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "wheat",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sugar",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "palm_oil",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "other",
						"type": "uint256"
					}
				],
				"internalType": "struct Ration.Quant",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "int256",
				"name": "_phone",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_adhar",
				"type": "int256"
			},
			{
				"internalType": "string[]",
				"name": "_fam",
				"type": "string[]"
			}
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "removeEmp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shopName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_adhar",
				"type": "uint256"
			}
		],
		"name": "reqShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_set",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_shopName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_phone",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_adhar",
				"type": "uint256"
			}
		],
		"name": "setEmp",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "r",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "w",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "s",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "p",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "o",
				"type": "uint256"
			}
		],
		"name": "setItems",
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
				"internalType": "address",
				"name": "x",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "verify",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "x",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "verifyCustomer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "a",
				"type": "address"
			}
		],
		"name": "getFam",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "phone",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "adharNum",
						"type": "int256"
					},
					{
						"internalType": "string[]",
						"name": "family",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "lastPurchase",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					}
				],
				"internalType": "struct Ration.Person",
				"name": "",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "wheat",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sugar",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "palm_oil",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "other",
						"type": "uint256"
					}
				],
				"internalType": "struct Ration.Quant",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "e",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "m",
				"type": "uint256"
			}
		],
		"name": "getLogs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "cName",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "uint256",
								"name": "rice",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "wheat",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "sugar",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "palm_oil",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "other",
								"type": "uint256"
							}
						],
						"internalType": "struct Ration.Quant",
						"name": "soldQuant",
						"type": "tuple"
					}
				],
				"internalType": "struct Ration.Sold[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMon",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
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
				"name": "x",
				"type": "address"
			}
		],
		"name": "getPhone",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "next",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "phone",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "adharNum",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "shopName",
						"type": "string"
					}
				],
				"internalType": "struct Ration.distributer",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextCustomer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "int256",
						"name": "phone",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "adharNum",
						"type": "int256"
					},
					{
						"internalType": "string[]",
						"name": "family",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "lastPurchase",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					}
				],
				"internalType": "struct Ration.Person",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "showitems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "wheat",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "sugar",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "palm_oil",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "other",
						"type": "uint256"
					}
				],
				"internalType": "struct Ration.Quant",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]`)

let contract;


async function getAccountBalance() {
    if (typeof window.ethereum === "undefined") {
        alert("Please install Metamask to connect to the Ethereum network");
        return;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum)

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();

    address = await signer.getAddress();
    console.log(address)
    balance = await provider.getBalance(address)

    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)

    contract = new ethers.Contract("0xfF8C590c8658E2d41f808172cD3D00A10312484B", abi, signer)

}

window.onload = function exampleFunction() {
    //console.log('The Script will load now.');
    getAccountBalance();
}
