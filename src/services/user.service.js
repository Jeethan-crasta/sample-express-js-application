const users= require('../data/users');

const getAllusers= async() => {
    return users;
};

const addUser=async(name)=>{
    const newUser={
        id:users.length + 1,
        name
    };
    users.push(newUser);
    return newUser;
};

const deleteUser=async(id)=>{
    const index=users.findIndex(user=>user.id===id);
    if(index===-1) return null;

    const deleteUser=users[index];
    users.splice(index,1);
    return deleteUser;
};

module.exports={
    getAllusers,
    addUser,
    deleteUser
};