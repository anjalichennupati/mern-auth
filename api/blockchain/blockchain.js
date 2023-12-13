// blockchain.js

const hash = require('object-hash');
const BlockChainModel = require("./Database/model.js");
const validator = require("E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/api/blockchain/validator.js");
const target_hash = hash(1560);

class BlockChain {
    constructor() {
        // create
        this.chain = [];

        //custom values
        this.gi_values = [];
        this.product_details = [];
        this.ownership_details = [];
        this.transactions_details = [];
        this.user_details = [];
        }

    getLastBlock() {
        return new Promise((resolve, reject) => {
            // get last block from db
            // -1 indicated to start from the end
            BlockChainModel.findOne({}, null, { sort: { _id: -1 }, limit: 1 })
                .then((block) => {
                    resolve(block || null); // Resolve with null if no block is found
                })
                .catch((err) => {
                    console.error("Error finding last block:", err.message);
                    reject(err);
                });
        });
    }
    
    
    async addNewBlock(prevHash) {
        let block = {
            // index of the current block is 1+prevblock index
            index: this.chain.length + 1,
            timestamp: Date.now(),
            prevHash: prevHash,
            
            //custom values
            gitag: this.gi_values,
            product: this.product_details,
            ownership: this.ownership_details,
            transactiondetails: this.transactions_details,
            userdetails: this.user_details,
        };
    
        if (validator.proofOfWork() == target_hash) {
            // add to the instance
            // save to the db
            block.hash = hash(block);
    
            try {
                const lastBlock = await this.getLastBlock();
    
                if (lastBlock) {
                    block.prevHash = lastBlock.hash;
                }
    
                let newBlock = new BlockChainModel(block);
    
                await newBlock.save();
                console.log("Block saved to database");
    
                // hashing for each block
                // SHA 256 algo
                this.hash = hash(block);
    
                // add to chain
                this.chain.push(block);

                this.gi_values = [];
                this.product_details = [];
                this.ownership_details = [];
                this.transactions_details = [];
                this.user_details = [];

                return block;
            } catch (err) {
                console.log("Cannot save block to database", err.message);
                throw err;
            }
        }
    }
        
    //custom values to the block
    //GI tag values
    addGItags(GITagID,GICreationDate){
        this
            .gi_values
            .push({GITagID,GICreationDate});
    }

    //product values
    addProductValues(ProductID,ProductName,AddressOfOrigin){
        this
            .product_details
            .push({ProductID,ProductName,AddressOfOrigin});
    }

    //ownership details
    addOwnership(OwnershipID,OwnershipStartDate,OwnershipEndDate){
        this
            .ownership_details
            .push({OwnershipID,OwnershipStartDate,OwnershipEndDate});
    }

    //transaction
    addTransactionValues(TransactionID,TransactionDate){
        this
            .transactions_details
            .push({TransactionID,TransactionDate});
    }

    //user details
    addUserDetails(UserID,UserName,Password,EmailID,RegistrationDate){
        this
            .user_details
            .push({UserID,UserName,Password,EmailID,RegistrationDate});
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    //checking if the blockchain is empty
    isEmpty(){
        return this.chain.length==0;
    }


    // ... rest of the code
}

module.exports = BlockChain;