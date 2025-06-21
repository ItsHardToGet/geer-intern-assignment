const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.json({"err": 1, "msg": "token not found"})

  jwt.verify(token, process.env.TOKEN_SECRET , (err,user) => {
  

    if (err) return res.json({"err": 1, "msg": "token not match"})

    req.user = user

    next()
  })
}
function roleAuthenticate(req,res,next){
   if(req.user.role==='Admin') {
    next()
   }
   else{
    res.json({"err": 1, "msg": "you dont have right to access the api"})
   }

}
export {authenticateToken,roleAuthenticate};