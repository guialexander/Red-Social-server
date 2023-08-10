const  jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;


/**
 * Validates the token
 * @param token JWT token
 * @returns PayloadType | null
 */
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Generates a token
 * @param payload Payload to be signed
 * @returns string
 */
function signToken(payload) {
  const token = jwt.sign(payload, SECRET);

  return token;
}



module.exports={
    verifyToken,
    signToken,

  };
