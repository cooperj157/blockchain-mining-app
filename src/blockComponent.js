import './Block.scss';

function BlockComponent (props){
    return(
        <ul id={`block${props.block[0]}`}>
            <li className="blockItemHeader">
                Block ID
            </li>
            <div>{props.block[0]}</div>
            <li className="blockItemHeader">
                Data
            </li>
            <div>{props.block[1]}</div>
            <li className="blockItemHeader">
                Previous Hash
            </li>
            <div>{props.block[2]}</div>
            <li className="blockItemHeader">
                Hash
            </li>
            <div>{props.block[3]}</div>
            <li className="blockItemHeader">
                Nonce
            </li>
            <div>{props.block[4]}</div>
        </ul>
    );
    
}

export default BlockComponent;