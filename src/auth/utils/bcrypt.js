const bcrypt= require ('bcrypt');
const crypto = require('crypto');
/**
 * Hash password
 * @param password password to hash
 * @param factor Number of rounds to hash the password, default is 10
 * @returns Promise<string> hashed password
 */

// crear la contraseña.
async function hashPassword(password,factor){
    // 1. salt
    const salt = await bcrypt.genSalt(factor);

    // 2. hash
    return await bcrypt.hash(password,salt);
}
//compara la contraseña
async function comparePassword(password,hashedPassword ) {
    return await bcrypt.compare(password, hashedPassword);
  }


function hashPasswordSync(password, factor) {
    // 1. salt
    const salt = bcrypt.genSaltSync(factor);

    // 2. hash
    return bcrypt.hashSync(password, salt);
  }

 function createHashToken(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
  }

module.exports={
  hashPassword,
  comparePassword,
  hashPasswordSync,
  createHashToken

};



