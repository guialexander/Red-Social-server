
const { signToken } = require ('../auth.service')


function createAuthResponse(input) {
  try {
  const payload = {
    id: input.id,
    email: input.email,
  };
  const token = signToken(payload);


  return ( { token, profile });
}catch(error){
  console.log(error)
}
}

module.exports={
    createAuthResponse
  };
