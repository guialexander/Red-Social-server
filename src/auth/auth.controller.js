
const { getUserByEmail } = require( '../../api/user/user.service');
const { verifyToken } = require ('./auth.service');
/**
 * Attaches the user object to the request if authenticated
 * @returns RequestHandler
 */
async function isAuthenticated(req, res , next) {


          const token = req.headers?.authorization?.split(' ')[1];
          console.log("ingresa")

          if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
          }

          const decoded = verifyToken(token);

          if (!decoded) {
            return res.status(401).json({ message: 'Unauthorized' });
          }

          const user = await getUserByEmail(decoded.email);

          if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
          }

          req.user = user;

         next();
        };


        module.exports={
            isAuthenticated,
          };
