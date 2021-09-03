# Getting Started with Create React App

## This is a online voting Web App based on Ethereum Blockchain :computer:



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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

