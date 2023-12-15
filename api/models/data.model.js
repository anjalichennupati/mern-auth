import mongoose from "mongoose";

const BlockchainSchema = new mongoose.Schema(
    {
      gitag: {
        type: String,
        required: true,
        unique: false,
      },
      product: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );
  
  const Blockchain = mongoose.model('Blockchain', BlockchainSchema);
  
  export default Blockchain;