import { useState } from "react";
import BlockComponent from './blockComponent'
import Block from './block';
import BigInt from 'big-integer';
function App() {

  const target = BigInt("000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",16);

  let IDindex = 0;
  const [chain, addBlock] = useState([[IDindex,null,null,null,null]]);

  function mineBlock(){
    IDindex++;

    const data = createRandomTx();

    const currBlock = new Block(IDindex,data);
    
    mineBlock(currBlock,target)
    addBlock([...chain,[IDindex,data,null,null,null]])
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
  console.log(randA,addresses);
  let randB = addresses[Math.floor(Math.random()*addresses.length)];
  let randNum = Math.floor(Math.random()*1000);
  return(`${randA} pays ${randB} ${randNum} dollars`);
}


export default App;
