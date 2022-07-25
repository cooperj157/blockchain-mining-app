function BlockComponent (props){
    return(
        <ul>
            <div className="header">
                <li>{props.block[0]}</li>
            </div>
            <div className="header">
                <li>{props.block[1]}</li>
            </div>
            <div className="header">
                <li>{props.block[2]}</li>
            </div>
            <div className="header">
                <li>{props.block[3]}</li>
            </div>
            <div className="header">
                <li>{props.block[4]}</li>
            </div>
        </ul>
        
        
    );
}

export default BlockComponent;