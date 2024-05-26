const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    fid: {type:String, 
        required: true},
    fname: {type:String, required: true},
    mail: {type: String, required: true},
    password: {type: String, required: true},
    dept: {type: String, required: true},
    mno: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: String, required: true},
    joiningDate: {type: Date, required:true}
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
