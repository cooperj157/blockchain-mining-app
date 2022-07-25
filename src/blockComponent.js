function BlockComponent (props){
    let i=0;
    return(
        <ul id={"block"+i}>
            <div className="header">
                Block ID
                <li>{props.block[0]}</li>
            </div>
            <div className="header">
                Data
                <li>{props.block[1]}</li>
            </div>
            <div className="header">
                Previous Hash
                <li>{props.block[2]}</li>
            </div>
            <div className="header">
                Hash
                <li>{props.block[3]}</li>
            </div>
            <div className="header">
                Nonce
                <li>{props.block[4]}</li>
            </div>
        </ul>
        
        
    );
}

export default BlockComponent;