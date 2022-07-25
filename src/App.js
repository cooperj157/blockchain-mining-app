import { useState } from "react";
import BlockComponent from './blockComponent'

function App() {
  const [chain, addBlock] = useState([["0",null,null,null,null]]);

  function mineBlock(){
    
    addBlock([...chain,[0,null,null,null,null]])
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

export default App;
