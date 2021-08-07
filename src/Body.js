import React , {useState} from "react";
import './App.css';



const Body = ({candidate1,candidate2,votecandidate,account}) => {
    const[candidate,setCandidate] = useState("");

    // var can=0;
    const[can,setCan] = useState();

    
    // console.log("candidate :"+candidate);
    //here we define a function onchange
    const onchange = (e) => {
        setCandidate(e.target.value);

        
        if(e.target.value == candidate1.name)
        {
            // can=candidate1.id;
            setCan(candidate1.id);
        }
        else
        {
            // can=candidate2.id;
            setCan(candidate2.id);
        }
        console.log("can :"+can);

        // console.log("e.target.value:"+e.target.value);
        // console.log("candidate:"+candidate);

        let hides=document.getElementById("hide");
        hides.style.display="block";
    };

    //here we define a function onsubmit
    const onsubmit = (e) => {
        e.preventDefault();
        // console.log("candidate"+candidate);
        // console.log("candidate.id"+candidate.id);
        if(candidate.id !== 0)
        {
            votecandidate(can);//Number(candidate)
            console.log("can:"+can);
        }
        else
        {
            window.alert("Error in Voting");
        }
    }

    
    return(
        <div>
            <table className="table">
                <tbody>
                    <tr><td><b>ID</b></td><td><b>Name</b></td><td><b>Vote Count</b></td></tr>
                    <tr><td>{candidate1.id}</td><td>{candidate1.name}</td><td>{candidate1.votecount}</td></tr>
                    <tr><td>{candidate2.id}</td><td>{candidate2.name}</td><td>{candidate2.votecount}</td></tr>
                </tbody>
            </table>
            <span className="table"><b>Cast Your Vote</b></span>
            <form className="table" id="select" onSubmit={onsubmit}>
                <select onChange={onchange}>
                    <option defaultValue value="">Select</option>
                    <option>{candidate1.name}</option>
                    <option>{candidate2.name}</option>
                </select>
                <button>Vote</button>
                <span id="hide">You're voting for <b>{candidate}</b></span>
            </form>
        </div>
        
    )
}

export default Body