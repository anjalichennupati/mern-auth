// validator.js
const target_hash=1560;
const hash = require('object-hash');

module.exports.validProof = (proof) => {
    let guessHash = hash(proof);
    //console.log("Hashing: ", guessHash);
    return guessHash == hash(target_hash);
}

module.exports.proofOfWork = () => {
    let proof = 0;
    while (true) {
        if (!module.exports.validProof(proof)) {
            proof++;
        } else {
            break;
        }
    }
    return hash(proof);
}
