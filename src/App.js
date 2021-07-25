import React , {useEffect,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Electionabi from './contracts/Election.json';
import Web3 from 'web3';
import Navbar from './Navbar';
import Body from './Body';
import "./App.css";

function App() {

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  },[])

  const[currentAccount,setCurrentAccount] = useState("");
  const[loader,setLoader] = useState(true);
  const[electionSM,setElectionSM] = useState();   /* SM means smart contract */
  const[candidate1,setCandidate1] = useState();
  const[candidate2,setCandidate2] = useState();

  // loadweb3 is a part of boilerplate code.
  const loadWeb3 = async() => {
    if(window.ethereum)
    {
      window.web3 = new  Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if(window.web3)
    {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else
    {
      window.alert("Metamask not detected");
    }
  };

  // loadblockchaindata is a boiler plate code
  const loadBlockchainData = async ()=>{
    setLoader(true);
    const web3 = window.web3;

    const accounts=await web3.eth.getAccounts();
    console.log("accounts:-"+accounts);
    // const account = accounts[0];
    setCurrentAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();

    console.log("networkId:-"+networkId);

    const networkData = Electionabi.networks[networkId];/* networkData is returning undefined */

    console.log("networkData:-"+networkData);

    var address="0x07F5c9F86b644CEc6EEe429189e21cf3924F268F";
    if(networkId == 5777)
    {
      const election = new web3.eth.Contract(Electionabi.abi,address); //here we are calling our contract 
      /* in brackets earlier was (Electionabi.abi,networkData.address) */
      
      const candidate1 = await election.methods.candidates(1).call(); //here we are calling candidates mapping from our smart contract
      // const candidate1Id = candidate1.id;
      // const candidate1Name = candidate1.name;
      // const candidate1VoteCount = candidate1.votecount;

      const candidate2 = await election.methods.candidates(2).call();
      // const candidate2Id = candidate2.id;
      // const candidate2Name = candidate2.name;
      // const candidate2VoteCount = candidate2.votecount;
      
      setCandidate1(candidate1);
      setCandidate2(candidate2);
      setElectionSM(election);
      setLoader(false);
    }
    else
    {
      window.alert("Smart contract is not deployed");
    }
  }

  const votecandidate = async (candidateId) => {
    setLoader(true);
    await electionSM.methods.Vote(candidateId).send({from : currentAccount}).on("transactionhash",()=>{
      console.log("Successfully Ran");
    });
    setLoader(false);
  };

  if(loader)
  {
    return <div>loading...</div>
  }

  return (
    <div>
      <Navbar account={currentAccount}/>  {/* This is navbar from navbar.js. We are passing account from here to Navbar.js */}
      <Body candidate1={candidate1} candidate2={candidate2} votecandidate={votecandidate} account={currentAccount}/>
    </div>
  );
}

export default App;
