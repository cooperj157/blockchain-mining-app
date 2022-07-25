import SHA256 from "crypto-js/sha256.js";
class Block {
    
    constructor(id,data){
        this.id = id;
        this.data = data;
       
    }

    //A toHash function which will create a hash of this block using the data it contains
    toHash(){
        return SHA256(this.id+this.previousHash+this.data+this.nonce).toString();
    }
}

//this line makes it so the other JS files in the folder can access (this comment is for me)
export default Block;