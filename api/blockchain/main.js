// main.js

let database = require("E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/api/blockchain/Database");

database.onConnect(async () => {
    let BlockChain = require("E:/3rd Year/5th Sem/DBMS/End Sem/mern-auth/api/blockchain/blockchain.js");
    let blockChain = new BlockChain();
    let hash= require('object-hash');

    // Function to add a new set of details and create a new block
    const addDetailsAndCreateBlock = async (details) => {
        // Add details to the current block
        blockChain.addGItags(details.GITagID, details.GICreationDate);
        blockChain.addProductValues(details.ProductID, details.ProductName, details.AddressOfOrigin);
        blockChain.addOwnership(details.OwnershipID, details.OwnershipStartDate, details.OwnershipEndDate);
        blockChain.addTransactionValues(details.TransactionID, details.TransactionDate);
        blockChain.addUserDetails(details.UserID, details.UserName, details.Password, details.EmailID, details.RegistrationDate);

        // Create a new block with the current set of transactions/details
        await blockChain.addNewBlock(blockChain.lastBlock()?.hash || null);
    };

    // user 1
    await addDetailsAndCreateBlock({
        GITagID: "abc123",
        GICreationDate: Date.now(),
        ProductID: 123,
        ProductName: "Wine",
        AddressOfOrigin: "India",
        OwnershipID: "xyz456",
        OwnershipStartDate: Date.now(),
        OwnershipEndDate: Date.now(),
        TransactionID: 789,
        TransactionDate: Date.now(),
        UserID: "def678",
        UserName: "Anjali",
        Password: "password456",
        EmailID: "xyz@gmail.com",
        RegistrationDate: Date.now(),
    });

    // user 2
    await addDetailsAndCreateBlock({
        GITagID: "xyz789",
        GICreationDate: Date.now(),
        ProductID: 456,
        ProductName: "Chocolate",
        AddressOfOrigin: "USA",
        OwnershipID: "uvw012",
        OwnershipStartDate: Date.now(),
        OwnershipEndDate: Date.now(),
        TransactionID: 987,
        TransactionDate: Date.now(),
        UserID: "ghi345",
        UserName: "John",
        Password: "password123",
        EmailID: "john@gmail.com",
        RegistrationDate: Date.now(),
    });

    // user 3
    await addDetailsAndCreateBlock({
        GITagID: "fgh678",
        GICreationDate: Date.now(),
        ProductID: 789,
        ProductName: "Cheesecake",
        AddressOfOrigin: "Germany",
        OwnershipID: "uvw678",
        OwnershipStartDate: Date.now(),
        OwnershipEndDate: Date.now(),
        TransactionID: 8910,
        TransactionDate: Date.now(),
        UserID: "pqr567",
        UserName: "Bag",
        Password: "password789",
        EmailID: "bag@gmail.com",
        RegistrationDate: Date.now(),
    });

    console.log("Chain: ", blockChain.chain);
});