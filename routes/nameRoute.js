const router=require('express').Router();
const name=require('../model/name');

router.post('/save',async (req,res)=>{
    let names=new name(req.body);
    try{
        let resp=await names.save()
        res.json({success:true,data:resp});
    }catch (err){
        res.json({success:false,data:err});
    }
})

router.get('/getName',async(req,res)=>{
    try{
        let names=await  name.find();
        res.send(names);
    }catch (err){
        res.json({err:err})
    }
})
module.exports=router;
