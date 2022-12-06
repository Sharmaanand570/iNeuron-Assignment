const userModel = require("../model/userModel")

const createUser = async function(req, res){
    try{
        const userData = req.body
        if(Object.keys(userData).length==0){
            return res.status(400).send({status:false, message:"userData is required"});
        }
        const findUser = await userModel.findOne({$or:[{email:userData.email}, {phone:userData.phone}]})
        if(findUser){
            return res.status(400).send({status:false, message:"email or phone is already present"});
        }
        const savedData = await userModel.create(userData);
        return res.status(201).send({status:true, data: savedData,message:"User Data Save Successfully"});
    }
    catch(error){
        return res.status(500).send({status:false, message: error});
    }
}

const userData = async function(req, res){
    try{
        const userId = req.params.userId;
        if(!userId){
            return res.status(400).send({status:false, message: "userId is required"});
        }
        const data = await userModel.findById(userId);
        if(!data){
            return res.status(404).send({status:false, message: "User Data not found"});
        }
        return res.status(200).send({status:true, message: "Data Found" ,data: data});
    }
    catch(error){
        return res.status(500).send({status:false, message: error});
    }
}

const updateUser = async function(req, res){
    try{
        const userId = req.params.userId;
        const userData = req.body;
        if(!userId){
            return res.status(400).send({status:false, message:"userId is required"});
        }
        if(Object.keys(userData).length==0){
            return res.status(400).send({status:false, message:"userData is required"});
        }
        const savedData = await userModel.findByIdAndUpdate({_id: userId}, userData, {new : true});
        if(!savedData){
            return res.status(404).send({status:false, message: "user Data not found for update"});
        }
        return res.status(200).send({status:true, data: savedData,message:"User Update Successfully"});
    }
    catch(error){
        return res.status(500).send({status:false, message: error});
    }
}

const deleteUser = async function(req, res){
    try{
        const userId = req.params.userId;
        const userData = await userModel.findById(userId);
        if(!userData || userData.isDeleted==true){
            return res.status(404).send({status:false, message: "user Data not found"})
        }
        await userModel.findByIdAndUpdate(userId,{isDeleted:true})
        return res.status(200).send({status:true, message:"User Data Deleted"});
    }
    catch(error){
        return res.status(500).send({status:false, message: error});
    }
}

module.exports = {createUser, userData, updateUser, deleteUser}