import express from 'express';
const router = express.Router();
//all routes are starting from /users
const users =[{

firstname:"abcd",
lastname: "dcbe"
},
{

    firstname:"cd",
    lastname: "be"
    }
]
router.get('/', (req, res)=>{
    
    res.send(users);
});
router.post(("/"),(req,res)=>{
 console.log("post req reached")
 const user = req.body
 users.push(user)
 res.send(`${user.firstname} added`)
})
export default router