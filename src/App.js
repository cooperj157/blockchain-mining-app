import { useState } from "react";
import BlockComponent from './blockComponent'
import Block from './block';
import BigInt from 'big-integer';
import SHA256 from 'crypto-js/sha256';

let IDindex = 0;
const target = BigInt("000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16);



function App() {
  const [chain, addBlock] = useState([[IDindex,null,null,null,null]]);
  
  function mineBlock(){
    IDindex++;

    const data = createRandomTx();

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
    
    mine(currBlock,target);

    addBlock([...chain,[IDindex,data,currBlock.prevHash,currBlock.hash,currBlock.nonce]])
    
  }
  
  return (
    <div>
      <button onClick={mineBlock}>
        start
      </button>
      {chain.map((block, i) => (<BlockComponent key={i} block={block}/> ))}
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

function mine(block,targetDiff){
  block.nonce = 0;
  while(true){
    let hash = SHA256(JSON.stringify(block)).toString();
      if(BigInt(hash,16) < targetDiff){
        block.hash = hash;
        break;
      }
      block.nonce++;
  }
}

//A toHash function which will create a hash of this block using the data it contains
function toHash(block){
  return SHA256(JSON.stringify(block)).toString();
}

export default App;
