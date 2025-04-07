var express = require("express")
require('./db')
var studentModel = require("./model/student")
var app = express()

app.use(express.json())
port =3000;


app.post('/',(req,res)=>{
    try {
        studentModel(req.body).save();
        res.send("Data Added")
    } catch (error) {
        res.send(error)
    }
})

app.get('/',async(req,res)=>{
    try {
        var data = await studentModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/:id',async(req,res)=>{
    try {
        await studentModel.findByIdAndDelete(req.params.id);
        res.send("data deleted")
    } catch (error) {
        res.send(error)
    }
})

app.put('/:id',async(req,res)=>{
    try {
        await studentModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("Data Updated")//set body in postman
    } catch (error) {
        console.log(error)
    }
})

app.listen(port,()=>{
    console.log(`server commected and runing on port ${port}`)
})
