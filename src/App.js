import { useState } from "react";
import BlockComponent from './blockComponent'
import Block from './block';
import BigInt from 'big-integer';
import SHA256 from 'crypto-js/sha256';
import './App.scss';

let IDindex = 0;
const diff = "0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
const target = BigInt(diff,16);

function App() {
  const [chain, addBlock] = useState([[IDindex,null,null,null,null]]);
  const [nonceCounter, updateCounter] = useState(0);
  const [currentDifficulty] = useState(diff);
  
  function mineBlock(){
    //id increase by 1
    IDindex++;

    //create random data to be our "transaction"
    const data = createRandomTx();

    //set block's previous hash attribute
    const currBlock = new Block(IDindex,data);
    
    currBlock.prevHash = "n/a";

    if(IDindex > 1){
      const lastBlockIndex = chain[IDindex-1];
      let lastBlock = new Block(lastBlockIndex[0],lastBlockIndex[1]);
      lastBlock.prevHash = lastBlockIndex[2];
      lastBlock.nonce = lastBlockIndex[4];
      
      // set current block prevHash to last block's hash
      currBlock.prevHash = toHash(lastBlock);
    }
    
    //mine the block, adding nonce and hash attributes to the block
    mine(currBlock,target);

    addBlock([...chain,[IDindex,data,currBlock.prevHash,currBlock.hash,currBlock.nonce]])
    
  }

  //mining function to find the block's hash. will increase nonce until it reaches target requirement
  function mine(block,targetDiff){
    block.nonce = 0;

    while(true){
      updateCounter(block.nonce);
      let hash = SHA256(JSON.stringify(block)).toString();
        if(BigInt(hash,16) < targetDiff){
          block.hash = hash;
          break;
        }
        block.nonce++;
        
    }
  }
  
  return (
  <div>
    <div id='topButtons'>
      <div id='mineButtonContainer'>
        <h4 id='mineButtonHeader'>Click here to mine a block</h4>
        <button id='mineButton' onClick={mineBlock}>
          Mine
        </button>
      </div>
      <div id='nonceContainer'>
        <h4 id='nonceHeader'>
          Nonce
        </h4>
        <div id='nonce'>
          {nonceCounter}
        </div>
      </div>
      <div id='difficultyControl'>
        <h4 style={{
          textDecoration: 'underline'
        }}
        >Current Difficulty</h4>
        <label>
          <input type="text" size={77} value={currentDifficulty} />
        </label>
        <input type="submit" value="Submit" />
      </div>
    </div>
    <div id='blockchain'>
    {chain.map((block, i) => (<BlockComponent key={i} block={block}/>))}
    </div> 
  </div>
      
    
  );
}

//helper functions

//create random Tx to use as our "data"
function createRandomTx(){
  const addresses = ['A','B','C','D','E'];
  let randA = addresses[Math.floor(Math.random()*addresses.length)];
  addresses.splice(addresses.indexOf(randA),1);
  let randB = addresses[Math.floor(Math.random()*addresses.length)];
  let randNum = Math.floor(Math.random()*1000);
  return(`${randA} pays ${randB} ${randNum} dollars`);
}

//A toHash function which will create a hash of this block using the data it contains
function toHash(block){
  return SHA256(JSON.stringify(block)).toString();
}

export default App;
