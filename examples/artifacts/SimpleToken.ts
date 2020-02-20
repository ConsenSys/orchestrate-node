export const SimpleToken = {
  contractName: 'SimpleToken',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'spender',
          type: 'address'
        },
        {
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'approve',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'from',
          type: 'address'
        },
        {
          name: 'to',
          type: 'address'
        },
        {
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'transferFrom',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'DECIMALS',
      outputs: [
        {
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'INITIAL_SUPPLY',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'spender',
          type: 'address'
        },
        {
          name: 'addedValue',
          type: 'uint256'
        }
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'spender',
          type: 'address'
        },
        {
          name: 'subtractedValue',
          type: 'uint256'
        }
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'to',
          type: 'address'
        },
        {
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'transfer',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: 'owner',
          type: 'address'
        },
        {
          name: 'spender',
          type: 'address'
        }
      ],
      name: 'allowance',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          name: 'to',
          type: 'address'
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          name: 'spender',
          type: 'address'
        },
        {
          indexed: false,
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Approval',
      type: 'event'
    }
  ],
  metadata:
    '{"compiler":{"version":"0.5.10+commit.5a6ea5b1"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}],"devdoc":{"details":"Very simple ERC20 Token example, where all tokens are pre-assigned to the creator. Note they can later distribute these tokens as they wish using `transfer` and other `ERC20` functions.","methods":{"allowance(address,address)":{"details":"Function to check the amount of tokens that an owner allowed to a spender.","params":{"owner":"address The address which owns the funds.","spender":"address The address which will spend the funds."},"return":"A uint256 specifying the amount of tokens still available for the spender."},"approve(address,uint256)":{"details":"Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender\'s allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729","params":{"spender":"The address which will spend the funds.","value":"The amount of tokens to be spent."}},"balanceOf(address)":{"details":"Gets the balance of the specified address.","params":{"owner":"The address to query the balance of."},"return":"An uint256 representing the amount owned by the passed address."},"constructor":{"details":"Constructor that gives msg.sender all of existing tokens."},"decimals()":{"return":"the number of decimals of the token."},"decreaseAllowance(address,uint256)":{"details":"Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.","params":{"spender":"The address which will spend the funds.","subtractedValue":"The amount of tokens to decrease the allowance by."}},"increaseAllowance(address,uint256)":{"details":"Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.","params":{"addedValue":"The amount of tokens to increase the allowance by.","spender":"The address which will spend the funds."}},"name()":{"return":"the name of the token."},"symbol()":{"return":"the symbol of the token."},"totalSupply()":{"details":"Total number of tokens in existence"},"transfer(address,uint256)":{"details":"Transfer token for a specified address","params":{"to":"The address to transfer to.","value":"The amount to be transferred."}},"transferFrom(address,address,uint256)":{"details":"Transfer tokens from one address to another. Note that while this function emits an Approval event, this is not required as per the specification, and other compliant implementations may not emit the event.","params":{"from":"address The address which you want to send tokens from","to":"address The address which you want to transfer to","value":"uint256 the amount of tokens to be transferred"}}},"title":"SimpleToken"},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"/home/julien/workspace/lgo/lgo-migration/contracts/SimpleToken.sol":"SimpleToken"},"evmVersion":"petersburg","libraries":{},"optimizer":{"enabled":true,"runs":100000},"remappings":[]},"sources":{"/home/julien/workspace/lgo/lgo-migration/contracts/SimpleToken.sol":{"keccak256":"0x7f3ccff1d2a4c3b743dec4752bda48aa9f2edebf85a4bf2c62cef9654e4e2f3b","urls":["bzzr://8f4159a1cc03df008114051082f28ab7619115b86d3603118de4cdf521812d9b","dweb:/ipfs/QmePzwZgpAruU1a1xpjD7zZ1WNV5sph7ZUd7EPZQuYRJwM"]},"openzeppelin-solidity/contracts/math/SafeMath.sol":{"keccak256":"0x965012d27b4262d7a41f5028cbb30c51ebd9ecd4be8fb30380aaa7a3c64fbc8b","urls":["bzzr://41ca38f6b0fa4b77b0feec43e422cfbec48b7eb38a41edf0b85c77e8d9a296b1","dweb:/ipfs/QmbMdvSXcqGKxeeYvzF3VrWpoHQyVzMXBhzhAokF2Gdymv"]},"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xba431353cb4fe70777ac026231eb5468e41aa1e81240a2b8136917acc5fff4dc","urls":["bzzr://80cd02a56e6e33504318124d0d645c82e615cc8a4b5829cc9d82d17635c644c8","dweb:/ipfs/QmT8y2VVjGaFdGphpcXrgvdPi2EgF9LuCDgJiJ89LvpFRV"]},"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol":{"keccak256":"0xe195405e9993d575173cdb5dd408db7459a026b9a98085c1a3b676f020f46584","urls":["bzzr://4463a0d4f49767f59c02f2a987b90d48e0d31b3ed3424f3e743496f102f96044","dweb:/ipfs/QmUKmVUX4Fif7dguPgC459cpGegiJd1s24YhgZUrBUkkDN"]},"openzeppelin-solidity/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x079c4e23ee448f529e43bfa3c4e8fb4be52cd0318ee923a276835bedf45b93d8","urls":["bzzr://48248e86f64407a95f241d6c5c8cfea6b4d4ebf4ebb467e5c98c8af3868fafe4","dweb:/ipfs/QmdxqtgEFZjHCoiYyz6pUAQ5iBm7As25jcyEbZoTaAgyDa"]}},"version":1}',
  bytecode:
    '0x608060405234801561001057600080fd5b506040518060400160405280600b81526020017f53696d706c65546f6b656e0000000000000000000000000000000000000000008152506040518060400160405280600381526020017f53494d0000000000000000000000000000000000000000000000000000000000815250601282600390805190602001906100959291906101a5565b5081516100a99060049060208501906101a5565b506005805460ff191660ff92909216919091179055506100d590503369021e19e0c9bab24000006100da565b610240565b6001600160a01b0382166100ed57600080fd5b6101068160025461018c60201b6108f71790919060201c565b6002556001600160a01b038216600090815260208181526040909120546101369183906108f761018c821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60008282018381101561019e57600080fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101e657805160ff1916838001178555610213565b82800160010185558215610213579182015b828111156102135782518255916020019190600101906101f8565b5061021f929150610223565b5090565b61023d91905b8082111561021f5760008155600101610229565b90565b6109458061024f6000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063313ce5671161008c57806395d89b411161006657806395d89b41146102a5578063a457c2d7146102ad578063a9059cbb146102e6578063dd62ed3e1461031f576100df565b8063313ce56714610231578063395093511461023957806370a0823114610272576100df565b806323b872dd116100bd57806323b872dd146101c85780632e0f26251461020b5780632ff2e9dc14610229576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101ae575b600080fd5b6100ec61035a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561017757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561040e565b604080519115158252519081900360200190f35b6101b66104a4565b60408051918252519081900360200190f35b61019a600480360360608110156101de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104aa565b61021361059a565b6040805160ff9092168252519081900360200190f35b6101b661059f565b6102136105ad565b61019a6004803603604081101561024f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105b6565b6101b66004803603602081101561028857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661068b565b6100ec6106b3565b61019a600480360360408110156102c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610732565b61019a600480360360408110156102fc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610795565b6101b66004803603604081101561033557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107ab565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104045780601f106103d957610100808354040283529160200191610404565b820191906000526020600020905b8154815290600101906020018083116103e757829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff831661043057600080fd5b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602090815260408083203384529091528120546104eb908363ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083203384529091529020556105278484846107f8565b73ffffffffffffffffffffffffffffffffffffffff84166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b601281565b69021e19e0c9bab240000081565b60055460ff1690565b600073ffffffffffffffffffffffffffffffffffffffff83166105d857600080fd5b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054610619908363ffffffff6108f716565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff89168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104045780601f106103d957610100808354040283529160200191610404565b600073ffffffffffffffffffffffffffffffffffffffff831661075457600080fd5b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054610619908363ffffffff6107e316565b60006107a23384846107f8565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6000828211156107f257600080fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff821661081857600080fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205461084e908263ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610890908263ffffffff6108f716565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561090957600080fd5b939250505056fea265627a7a7230582021b9409d39dc5497346129b4f8ae9ad87628e9733e96a78af60101187c5cfd8b64736f6c634300050a0032',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106100df5760003560e01c8063313ce5671161008c57806395d89b411161006657806395d89b41146102a5578063a457c2d7146102ad578063a9059cbb146102e6578063dd62ed3e1461031f576100df565b8063313ce56714610231578063395093511461023957806370a0823114610272576100df565b806323b872dd116100bd57806323b872dd146101c85780632e0f26251461020b5780632ff2e9dc14610229576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101ae575b600080fd5b6100ec61035a565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561017757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561040e565b604080519115158252519081900360200190f35b6101b66104a4565b60408051918252519081900360200190f35b61019a600480360360608110156101de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356104aa565b61021361059a565b6040805160ff9092168252519081900360200190f35b6101b661059f565b6102136105ad565b61019a6004803603604081101561024f57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105b6565b6101b66004803603602081101561028857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661068b565b6100ec6106b3565b61019a600480360360408110156102c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610732565b61019a600480360360408110156102fc57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610795565b6101b66004803603604081101561033557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166107ab565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104045780601f106103d957610100808354040283529160200191610404565b820191906000526020600020905b8154815290600101906020018083116103e757829003601f168201915b5050505050905090565b600073ffffffffffffffffffffffffffffffffffffffff831661043057600080fd5b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b73ffffffffffffffffffffffffffffffffffffffff831660009081526001602090815260408083203384529091528120546104eb908363ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083203384529091529020556105278484846107f8565b73ffffffffffffffffffffffffffffffffffffffff84166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b601281565b69021e19e0c9bab240000081565b60055460ff1690565b600073ffffffffffffffffffffffffffffffffffffffff83166105d857600080fd5b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054610619908363ffffffff6108f716565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff89168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104045780601f106103d957610100808354040283529160200191610404565b600073ffffffffffffffffffffffffffffffffffffffff831661075457600080fd5b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152902054610619908363ffffffff6107e316565b60006107a23384846107f8565b50600192915050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6000828211156107f257600080fd5b50900390565b73ffffffffffffffffffffffffffffffffffffffff821661081857600080fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205461084e908263ffffffff6107e316565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610890908263ffffffff6108f716565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561090957600080fd5b939250505056fea265627a7a7230582021b9409d39dc5497346129b4f8ae9ad87628e9733e96a78af60101187c5cfd8b64736f6c634300050a0032',
  sourceMap:
    '392:379:8:-;;;651:118;8:9:-1;5:2;;;30:1;27;20:12;5:2;651:118:8;405:163:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;476:2:8;501:4:15;493:5;:12;;;;;;;;;;;;:::i;:::-;-1:-1:-1;515:16:15;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;541:9:15;:20;;-1:-1:-1;;541:20:15;;;;;;;;;;;;-1:-1:-1;729:33:8;;-1:-1:-1;735:10:8;525:33;729:5;:33::i;:::-;392:379;;6198:263:13;-1:-1:-1;;;;;6272:21:13;;6264:30;;;;;;6320:23;6337:5;6320:12;;:16;;;;;;:23;;;;:::i;:::-;6305:12;:38;-1:-1:-1;;;;;6374:18:13;;:9;:18;;;;;;;;;;;;:29;;6397:5;;6374:22;;;;;:29;;:::i;:::-;-1:-1:-1;;;;;6353:18:13;;:9;:18;;;;;;;;;;;:50;;;;6418:36;;;;;;;6353:18;;:9;;6418:36;;;;;;;;;;6198:263;;:::o;1431:145:12:-;1489:7;1520:5;;;1543:6;;;;1535:15;;;;;;1568:1;1431:145;-1:-1:-1;;;1431:145:12:o;392:379:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;392:379:8;;;-1:-1:-1;392:379:8;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
  deployedSourceMap:
    '392:379:8:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;392:379:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;628:81:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;628:81:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2735:238:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2735:238:13;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;936:89;;;:::i;:::-;;;;;;;;;;;;;;;;3436:294;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3436:294:13;;;;;;;;;;;;;;;;;;:::i;443:35:8:-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;484:74;;;:::i;930:81:15:-;;;:::i;4233:317:13:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4233:317:13;;;;;;;;;:::i;1234:104::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1234:104:13;;;;:::i;771:85:15:-;;;:::i;5058:327:13:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;5058:327:13;;;;;;;;;:::i;1962:137::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1962:137:13;;;;;;;;;:::i;1669:129::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1669:129:13;;;;;;;;;;;:::i;628:81:15:-;697:5;690:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;665:13;;690:12;;697:5;;690:12;;697:5;690:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;628:81;:::o;2735:238:13:-;2800:4;2824:21;;;2816:30;;;;;;2866:10;2857:20;;;;:8;:20;;;;;;;;;:29;;;;;;;;;;;;:37;;;2909:36;;;;;;;2857:29;;2866:10;2909:36;;;;;;;;;;;-1:-1:-1;2962:4:13;2735:238;;;;:::o;936:89::-;1006:12;;936:89;:::o;3436:294::-;3560:14;;;3515:4;3560:14;;;:8;:14;;;;;;;;3575:10;3560:26;;;;;;;;:37;;3591:5;3560:37;:30;:37;:::i;:::-;3531:14;;;;;;;:8;:14;;;;;;;;3546:10;3531:26;;;;;;;:66;3607:26;3540:4;3623:2;3627:5;3607:9;:26::i;:::-;3648:54;;;3675:14;;;;:8;:14;;;;;;;;3663:10;3675:26;;;;;;;;;;;3648:54;;;;;;;3663:10;;3648:54;;;;;;;;;;;;-1:-1:-1;3719:4:13;3436:294;;;;;:::o;443:35:8:-;476:2;443:35;:::o;484:74::-;525:33;484:74;:::o;930:81:15:-;995:9;;;;930:81;:::o;4233:317:13:-;4313:4;4337:21;;;4329:30;;;;;;4411:10;4402:20;;;;:8;:20;;;;;;;;;:29;;;;;;;;;;:45;;4436:10;4402:45;:33;:45;:::i;:::-;4379:10;4370:20;;;;:8;:20;;;;;;;;;:29;;;;;;;;;;;;:77;;;4462:60;;;;;;4370:29;;4462:60;;;;;;;;;;;-1:-1:-1;4539:4:13;4233:317;;;;:::o;1234:104::-;1315:16;;1289:7;1315:16;;;;;;;;;;;;1234:104::o;771:85:15:-;842:7;835:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;810:13;;835:14;;842:7;;835:14;;842:7;835:14;;;;;;;;;;;;;;;;;;;;;;;;5058:327:13;5143:4;5167:21;;;5159:30;;;;;;5241:10;5232:20;;;;:8;:20;;;;;;;;;:29;;;;;;;;;;:50;;5266:15;5232:50;:33;:50;:::i;1962:137::-;2023:4;2039:32;2049:10;2061:2;2065:5;2039:9;:32::i;:::-;-1:-1:-1;2088:4:13;1962:137;;;;:::o;1669:129::-;1767:15;;;;1741:7;1767:15;;;:8;:15;;;;;;;;:24;;;;;;;;;;;;;1669:129::o;1205:145:12:-;1263:7;1295:1;1290;:6;;1282:15;;;;;;-1:-1:-1;1319:5:12;;;1205:145::o;5599:256:13:-;5686:16;;;5678:25;;;;;;5732:15;;;:9;:15;;;;;;;;;;;:26;;5752:5;5732:26;:19;:26;:::i;:::-;5714:15;;;;:9;:15;;;;;;;;;;;:44;;;;5784:13;;;;;;;:24;;5802:5;5784:24;:17;:24;:::i;:::-;5768:13;;;;:9;:13;;;;;;;;;;;;:40;;;;5823:25;;;;;;;5768:13;;5823:25;;;;;;;;;;;;;5599:256;;;:::o;1431:145:12:-;1489:7;1520:5;;;1543:6;;;;1535:15;;;;;;1568:1;1431:145;-1:-1:-1;;;1431:145:12:o',
  source:
    'pragma solidity ^0.5.0;\n\nimport "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";\nimport "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";\n\n/**\n * @title SimpleToken\n * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.\n * Note they can later distribute these tokens as they wish using `transfer` and other\n * `ERC20` functions.\n */\ncontract SimpleToken is ERC20, ERC20Detailed {\n    uint8 public constant DECIMALS = 18;\n    uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(DECIMALS));\n\n    /**\n     * @dev Constructor that gives msg.sender all of existing tokens.\n     */\n    constructor () public ERC20Detailed("SimpleToken", "SIM", DECIMALS) {\n        _mint(msg.sender, INITIAL_SUPPLY);\n    }\n}',
  sourcePath: '/home/julien/workspace/lgo/lgo-migration/contracts/SimpleToken.sol',
  ast: {
    absolutePath: '/home/julien/workspace/lgo/lgo-migration/contracts/SimpleToken.sol',
    exportedSymbols: {
      SimpleToken: [1149]
    },
    id: 1150,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 1114,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:8'
      },
      {
        absolutePath: 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        file: 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        id: 1115,
        nodeType: 'ImportDirective',
        scope: 1150,
        sourceUnit: 1944,
        src: '25:63:8',
        symbolAliases: [],
        unitAlias: ''
      },
      {
        absolutePath: 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol',
        file: 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol',
        id: 1116,
        nodeType: 'ImportDirective',
        scope: 1150,
        sourceUnit: 2033,
        src: '89:71:8',
        symbolAliases: [],
        unitAlias: ''
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1117,
              name: 'ERC20',
              nodeType: 'UserDefinedTypeName',
              referencedDeclaration: 1943,
              src: '416:5:8',
              typeDescriptions: {
                typeIdentifier: 't_contract$_ERC20_$1943',
                typeString: 'contract ERC20'
              }
            },
            id: 1118,
            nodeType: 'InheritanceSpecifier',
            src: '416:5:8'
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1119,
              name: 'ERC20Detailed',
              nodeType: 'UserDefinedTypeName',
              referencedDeclaration: 2032,
              src: '423:13:8',
              typeDescriptions: {
                typeIdentifier: 't_contract$_ERC20Detailed_$2032',
                typeString: 'contract ERC20Detailed'
              }
            },
            id: 1120,
            nodeType: 'InheritanceSpecifier',
            src: '423:13:8'
          }
        ],
        contractDependencies: [1943, 2032, 2129],
        contractKind: 'contract',
        documentation:
          '@title SimpleToken\n@dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.\nNote they can later distribute these tokens as they wish using `transfer` and other\n`ERC20` functions.',
        fullyImplemented: true,
        id: 1149,
        linearizedBaseContracts: [1149, 2032, 1943, 2129],
        name: 'SimpleToken',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: true,
            id: 1123,
            name: 'DECIMALS',
            nodeType: 'VariableDeclaration',
            scope: 1149,
            src: '443:35:8',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint8',
              typeString: 'uint8'
            },
            typeName: {
              id: 1121,
              name: 'uint8',
              nodeType: 'ElementaryTypeName',
              src: '443:5:8',
              typeDescriptions: {
                typeIdentifier: 't_uint8',
                typeString: 'uint8'
              }
            },
            value: {
              argumentTypes: null,
              hexValue: '3138',
              id: 1122,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: 'number',
              lValueRequested: false,
              nodeType: 'Literal',
              src: '476:2:8',
              subdenomination: null,
              typeDescriptions: {
                typeIdentifier: 't_rational_18_by_1',
                typeString: 'int_const 18'
              },
              value: '18'
            },
            visibility: 'public'
          },
          {
            constant: true,
            id: 1133,
            name: 'INITIAL_SUPPLY',
            nodeType: 'VariableDeclaration',
            scope: 1149,
            src: '484:74:8',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 1124,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '484:7:8',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: {
              argumentTypes: null,
              commonType: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              },
              id: 1132,
              isConstant: false,
              isLValue: false,
              isPure: true,
              lValueRequested: false,
              leftExpression: {
                argumentTypes: null,
                hexValue: '3130303030',
                id: 1125,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: 'number',
                lValueRequested: false,
                nodeType: 'Literal',
                src: '525:5:8',
                subdenomination: null,
                typeDescriptions: {
                  typeIdentifier: 't_rational_10000_by_1',
                  typeString: 'int_const 10000'
                },
                value: '10000'
              },
              nodeType: 'BinaryOperation',
              operator: '*',
              rightExpression: {
                argumentTypes: null,
                components: [
                  {
                    argumentTypes: null,
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 1130,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    lValueRequested: false,
                    leftExpression: {
                      argumentTypes: null,
                      hexValue: '3130',
                      id: 1126,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '534:2:8',
                      subdenomination: null,
                      typeDescriptions: {
                        typeIdentifier: 't_rational_10_by_1',
                        typeString: 'int_const 10'
                      },
                      value: '10'
                    },
                    nodeType: 'BinaryOperation',
                    operator: '**',
                    rightExpression: {
                      argumentTypes: null,
                      arguments: [
                        {
                          argumentTypes: null,
                          id: 1128,
                          name: 'DECIMALS',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 1123,
                          src: '548:8:8',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        ],
                        id: 1127,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: 'ElementaryTypeNameExpression',
                        src: '540:7:8',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_uint256_$',
                          typeString: 'type(uint256)'
                        },
                        typeName: 'uint256'
                      },
                      id: 1129,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'typeConversion',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '540:17:8',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '534:23:8',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  }
                ],
                id: 1131,
                isConstant: false,
                isInlineArray: false,
                isLValue: false,
                isPure: true,
                lValueRequested: false,
                nodeType: 'TupleExpression',
                src: '533:25:8',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256'
                }
              },
              src: '525:33:8',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            visibility: 'public'
          },
          {
            body: {
              id: 1147,
              nodeType: 'Block',
              src: '719:50:8',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 1142,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 2144,
                          src: '735:3:8',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 1143,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '735:10:8',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 1144,
                        name: 'INITIAL_SUPPLY',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 1133,
                        src: '747:14:8',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 1141,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 1858,
                      src: '729:5:8',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 1145,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '729:33:8',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 1146,
                  nodeType: 'ExpressionStatement',
                  src: '729:33:8'
                }
              ]
            },
            documentation: '@dev Constructor that gives msg.sender all of existing tokens.',
            id: 1148,
            implemented: true,
            kind: 'constructor',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    hexValue: '53696d706c65546f6b656e',
                    id: 1136,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '687:13:8',
                    subdenomination: null,
                    typeDescriptions: {
                      typeIdentifier:
                        't_stringliteral_da035752f00a45fb4b10b269b9dcdc58efd98a12eda6b33da179acab837f7818',
                      typeString: 'literal_string "SimpleToken"'
                    },
                    value: 'SimpleToken'
                  },
                  {
                    argumentTypes: null,
                    hexValue: '53494d',
                    id: 1137,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '702:5:8',
                    subdenomination: null,
                    typeDescriptions: {
                      typeIdentifier:
                        't_stringliteral_f6fc0e115f393f52de8a1783205484e2c47c0ae0af6904170edd370a74c376e8',
                      typeString: 'literal_string "SIM"'
                    },
                    value: 'SIM'
                  },
                  {
                    argumentTypes: null,
                    id: 1138,
                    name: 'DECIMALS',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 1123,
                    src: '709:8:8',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8'
                    }
                  }
                ],
                id: 1139,
                modifierName: {
                  argumentTypes: null,
                  id: 1135,
                  name: 'ERC20Detailed',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 2032,
                  src: '673:13:8',
                  typeDescriptions: {
                    typeIdentifier: 't_type$_t_contract$_ERC20Detailed_$2032_$',
                    typeString: 'type(contract ERC20Detailed)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '673:45:8'
              }
            ],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 1134,
              nodeType: 'ParameterList',
              parameters: [],
              src: '663:2:8'
            },
            returnParameters: {
              id: 1140,
              nodeType: 'ParameterList',
              parameters: [],
              src: '719:0:8'
            },
            scope: 1149,
            src: '651:118:8',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          }
        ],
        scope: 1150,
        src: '392:379:8'
      }
    ],
    src: '0:771:8'
  },
  legacyAST: {
    absolutePath: '/home/julien/workspace/lgo/lgo-migration/contracts/SimpleToken.sol',
    exportedSymbols: {
      SimpleToken: [1149]
    },
    id: 1150,
    nodeType: 'SourceUnit',
    nodes: [
      {
        id: 1114,
        literals: ['solidity', '^', '0.5', '.0'],
        nodeType: 'PragmaDirective',
        src: '0:23:8'
      },
      {
        absolutePath: 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        file: 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol',
        id: 1115,
        nodeType: 'ImportDirective',
        scope: 1150,
        sourceUnit: 1944,
        src: '25:63:8',
        symbolAliases: [],
        unitAlias: ''
      },
      {
        absolutePath: 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol',
        file: 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol',
        id: 1116,
        nodeType: 'ImportDirective',
        scope: 1150,
        sourceUnit: 2033,
        src: '89:71:8',
        symbolAliases: [],
        unitAlias: ''
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1117,
              name: 'ERC20',
              nodeType: 'UserDefinedTypeName',
              referencedDeclaration: 1943,
              src: '416:5:8',
              typeDescriptions: {
                typeIdentifier: 't_contract$_ERC20_$1943',
                typeString: 'contract ERC20'
              }
            },
            id: 1118,
            nodeType: 'InheritanceSpecifier',
            src: '416:5:8'
          },
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 1119,
              name: 'ERC20Detailed',
              nodeType: 'UserDefinedTypeName',
              referencedDeclaration: 2032,
              src: '423:13:8',
              typeDescriptions: {
                typeIdentifier: 't_contract$_ERC20Detailed_$2032',
                typeString: 'contract ERC20Detailed'
              }
            },
            id: 1120,
            nodeType: 'InheritanceSpecifier',
            src: '423:13:8'
          }
        ],
        contractDependencies: [1943, 2032, 2129],
        contractKind: 'contract',
        documentation:
          '@title SimpleToken\n@dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.\nNote they can later distribute these tokens as they wish using `transfer` and other\n`ERC20` functions.',
        fullyImplemented: true,
        id: 1149,
        linearizedBaseContracts: [1149, 2032, 1943, 2129],
        name: 'SimpleToken',
        nodeType: 'ContractDefinition',
        nodes: [
          {
            constant: true,
            id: 1123,
            name: 'DECIMALS',
            nodeType: 'VariableDeclaration',
            scope: 1149,
            src: '443:35:8',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint8',
              typeString: 'uint8'
            },
            typeName: {
              id: 1121,
              name: 'uint8',
              nodeType: 'ElementaryTypeName',
              src: '443:5:8',
              typeDescriptions: {
                typeIdentifier: 't_uint8',
                typeString: 'uint8'
              }
            },
            value: {
              argumentTypes: null,
              hexValue: '3138',
              id: 1122,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: 'number',
              lValueRequested: false,
              nodeType: 'Literal',
              src: '476:2:8',
              subdenomination: null,
              typeDescriptions: {
                typeIdentifier: 't_rational_18_by_1',
                typeString: 'int_const 18'
              },
              value: '18'
            },
            visibility: 'public'
          },
          {
            constant: true,
            id: 1133,
            name: 'INITIAL_SUPPLY',
            nodeType: 'VariableDeclaration',
            scope: 1149,
            src: '484:74:8',
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_uint256',
              typeString: 'uint256'
            },
            typeName: {
              id: 1124,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '484:7:8',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            value: {
              argumentTypes: null,
              commonType: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              },
              id: 1132,
              isConstant: false,
              isLValue: false,
              isPure: true,
              lValueRequested: false,
              leftExpression: {
                argumentTypes: null,
                hexValue: '3130303030',
                id: 1125,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: 'number',
                lValueRequested: false,
                nodeType: 'Literal',
                src: '525:5:8',
                subdenomination: null,
                typeDescriptions: {
                  typeIdentifier: 't_rational_10000_by_1',
                  typeString: 'int_const 10000'
                },
                value: '10000'
              },
              nodeType: 'BinaryOperation',
              operator: '*',
              rightExpression: {
                argumentTypes: null,
                components: [
                  {
                    argumentTypes: null,
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 1130,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    lValueRequested: false,
                    leftExpression: {
                      argumentTypes: null,
                      hexValue: '3130',
                      id: 1126,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '534:2:8',
                      subdenomination: null,
                      typeDescriptions: {
                        typeIdentifier: 't_rational_10_by_1',
                        typeString: 'int_const 10'
                      },
                      value: '10'
                    },
                    nodeType: 'BinaryOperation',
                    operator: '**',
                    rightExpression: {
                      argumentTypes: null,
                      arguments: [
                        {
                          argumentTypes: null,
                          id: 1128,
                          name: 'DECIMALS',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 1123,
                          src: '548:8:8',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8'
                          }
                        ],
                        id: 1127,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: 'ElementaryTypeNameExpression',
                        src: '540:7:8',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_uint256_$',
                          typeString: 'type(uint256)'
                        },
                        typeName: 'uint256'
                      },
                      id: 1129,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'typeConversion',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '540:17:8',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '534:23:8',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  }
                ],
                id: 1131,
                isConstant: false,
                isInlineArray: false,
                isLValue: false,
                isPure: true,
                lValueRequested: false,
                nodeType: 'TupleExpression',
                src: '533:25:8',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256'
                }
              },
              src: '525:33:8',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256'
              }
            },
            visibility: 'public'
          },
          {
            body: {
              id: 1147,
              nodeType: 'Block',
              src: '719:50:8',
              statements: [
                {
                  expression: {
                    argumentTypes: null,
                    arguments: [
                      {
                        argumentTypes: null,
                        expression: {
                          argumentTypes: null,
                          id: 1142,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 2144,
                          src: '735:3:8',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 1143,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: null,
                        src: '735:10:8',
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        argumentTypes: null,
                        id: 1144,
                        name: 'INITIAL_SUPPLY',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 1133,
                        src: '747:14:8',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 1141,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 1858,
                      src: '729:5:8',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 1145,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '729:33:8',
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 1146,
                  nodeType: 'ExpressionStatement',
                  src: '729:33:8'
                }
              ]
            },
            documentation: '@dev Constructor that gives msg.sender all of existing tokens.',
            id: 1148,
            implemented: true,
            kind: 'constructor',
            modifiers: [
              {
                arguments: [
                  {
                    argumentTypes: null,
                    hexValue: '53696d706c65546f6b656e',
                    id: 1136,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '687:13:8',
                    subdenomination: null,
                    typeDescriptions: {
                      typeIdentifier:
                        't_stringliteral_da035752f00a45fb4b10b269b9dcdc58efd98a12eda6b33da179acab837f7818',
                      typeString: 'literal_string "SimpleToken"'
                    },
                    value: 'SimpleToken'
                  },
                  {
                    argumentTypes: null,
                    hexValue: '53494d',
                    id: 1137,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '702:5:8',
                    subdenomination: null,
                    typeDescriptions: {
                      typeIdentifier:
                        't_stringliteral_f6fc0e115f393f52de8a1783205484e2c47c0ae0af6904170edd370a74c376e8',
                      typeString: 'literal_string "SIM"'
                    },
                    value: 'SIM'
                  },
                  {
                    argumentTypes: null,
                    id: 1138,
                    name: 'DECIMALS',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 1123,
                    src: '709:8:8',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8'
                    }
                  }
                ],
                id: 1139,
                modifierName: {
                  argumentTypes: null,
                  id: 1135,
                  name: 'ERC20Detailed',
                  nodeType: 'Identifier',
                  overloadedDeclarations: [],
                  referencedDeclaration: 2032,
                  src: '673:13:8',
                  typeDescriptions: {
                    typeIdentifier: 't_type$_t_contract$_ERC20Detailed_$2032_$',
                    typeString: 'type(contract ERC20Detailed)'
                  }
                },
                nodeType: 'ModifierInvocation',
                src: '673:45:8'
              }
            ],
            name: '',
            nodeType: 'FunctionDefinition',
            parameters: {
              id: 1134,
              nodeType: 'ParameterList',
              parameters: [],
              src: '663:2:8'
            },
            returnParameters: {
              id: 1140,
              nodeType: 'ParameterList',
              parameters: [],
              src: '719:0:8'
            },
            scope: 1149,
            src: '651:118:8',
            stateMutability: 'nonpayable',
            superFunction: null,
            visibility: 'public'
          }
        ],
        scope: 1150,
        src: '392:379:8'
      }
    ],
    src: '0:771:8'
  },
  compiler: {
    name: 'solc',
    version: '0.5.10+commit.5a6ea5b1.Emscripten.clang'
  },
  networks: {},
  schemaVersion: '3.0.11',
  updatedAt: '2019-09-26T12:08:50.313Z',
  devdoc: {
    details:
      'Very simple ERC20 Token example, where all tokens are pre-assigned to the creator. Note they can later distribute these tokens as they wish using `transfer` and other `ERC20` functions.',
    methods: {
      'allowance(address,address)': {
        details: 'Function to check the amount of tokens that an owner allowed to a spender.',
        params: {
          owner: 'address The address which owns the funds.',
          spender: 'address The address which will spend the funds.'
        },
        return: 'A uint256 specifying the amount of tokens still available for the spender.'
      },
      'approve(address,uint256)': {
        details: `Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729`,
        params: {
          spender: 'The address which will spend the funds.',
          value: 'The amount of tokens to be spent.'
        }
      },
      'balanceOf(address)': {
        details: 'Gets the balance of the specified address.',
        params: {
          owner: 'The address to query the balance of.'
        },
        return: 'An uint256 representing the amount owned by the passed address.'
      },
      constructor: {
        details: 'Constructor that gives msg.sender all of existing tokens.'
      },
      'decimals()': {
        return: 'the number of decimals of the token.'
      },
      'decreaseAllowance(address,uint256)': {
        details:
          'Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.',
        params: {
          spender: 'The address which will spend the funds.',
          subtractedValue: 'The amount of tokens to decrease the allowance by.'
        }
      },
      'increaseAllowance(address,uint256)': {
        details:
          'Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.',
        params: {
          addedValue: 'The amount of tokens to increase the allowance by.',
          spender: 'The address which will spend the funds.'
        }
      },
      'name()': {
        return: 'the name of the token.'
      },
      'symbol()': {
        return: 'the symbol of the token.'
      },
      'totalSupply()': {
        details: 'Total number of tokens in existence'
      },
      'transfer(address,uint256)': {
        details: 'Transfer token for a specified address',
        params: {
          to: 'The address to transfer to.',
          value: 'The amount to be transferred.'
        }
      },
      'transferFrom(address,address,uint256)': {
        details:
          'Transfer tokens from one address to another. Note that while this function emits an Approval event, this is not required as per the specification, and other compliant implementations may not emit the event.',
        params: {
          from: 'address The address which you want to send tokens from',
          to: 'address The address which you want to transfer to',
          value: 'uint256 the amount of tokens to be transferred'
        }
      }
    },
    title: 'SimpleToken'
  },
  userdoc: {
    methods: {}
  }
}
