
function BlockComponent (props){
    
    return(
        <ul id={`block${props.block[0]}`}>
            <li className="header">
                Block ID
            </li>
            <div>{props.block[0]}</div>
            <li className="header">
                Data
            </li>
            <div>{props.block[1]}</div>
            <li className="header">
                Previous Hash
            </li>
            <div>{props.block[2]}</div>
            <li className="header">
                Hash
            </li>
            <div>{props.block[3]}</div>
            <li className="header">
                Nonce
            </li>
            <div>{props.block[4]}</div>
        </ul>
        
    );
    
}

export default BlockComponent;