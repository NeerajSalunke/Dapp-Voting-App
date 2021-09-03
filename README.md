# Online Voting Dapp

## This is a online voting Dapp based on Ethereum Blockchain :computer:



## Steps
To Vote , user needs a metamask account with some ethers. In this project, i have deployed project on ganache local blockchain.\
To test the project, we would need many accounts. So we would need to use Ganache local blockchain.

### Steps to deploy smart contract on ganache local blockchain
- Install Truffle. You can run:\
`npm install -g truffle`
- In the project directory, run:\
`truffle init`
- In folder called "contracts", Make a new file and name it the same as your smart contract  with .sol extension.
- In the project directory, you can run:\
`truffle compile`
- To deploy smart contract to ganache local blockchain, you can run:\
`truffle migrate --reset`

### To make React App
`npx create-react-app client`\
client is the name of react app

### To install Web3
`npm install web3`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## License

[MIT](https://choosealicense.com/licenses/mit/)