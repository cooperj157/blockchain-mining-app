# blockchain-mining-app
App which displays the basics of mining on a PoW blockchain

A simple UI that displays a "mine" button and creates a blockchain with the blocks mined. Built with React/Javascript. When you click the mine button, it creates a block with an ID and a fake transaction, and mines the block. The mining process is a simplified version of the bitcoin mining process: There is a target number and a nonce. The block data is continuously hashed with a new nonce until the hash satisfies the conditions of the target difficulty. You can change the target difficulty in the code. Each block includes the previous block's hash in its own hash, which creates the "chain" security mechanism.
