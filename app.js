const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/api/signup",async(req,res)=>{
    const{fid,fname,email,password,dept,mno,gender,age,joiningDate}=req.body

    const data={
        fid:fid,
        fname:fname,
        email:email,
        password:password,
        dept:dept,
        mno:mno,
        gender:gender,
        age:age,
        joiningDate:joiningDate
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            return res.json("exist")
        }
        else{
            res.json("notexist")
            return await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

