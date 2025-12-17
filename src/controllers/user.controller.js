const userService = require('../services/user.service');
const asyncHandler = require('../utils/asyncHandler');

const getUsers=asyncHandler(async(req,res)=>{
    const users=await userService.getAllusers();
    res.status(200).json(users);
});

const createUser=asyncHandler(async(req,res)=>{
    const{name}=req.body;

    if(!name){
        return res.status(400).json({message:"Name is required"});
    }

    const newUser =await userService.addUser(name);
    res.status(201).json(newUser); 
});

const removeUser=asyncHandler(async(req,res)=>{
    const id=Number(req.params.id);

    const deleteUser=await userService.deleteUser(id);
    if(!deleteUser){
        return res.status(404).json({message:"User not found"});
    }
    
    res.status(200).json(deleteUser);
});

module.exports={
    getUsers,
    createUser,
    removeUser
};
