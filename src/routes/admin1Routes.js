const express=require("express");
const adminRouter1=express.Router();

function router(nav){
    adminRouter1.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'Library'
        });
    });
    adminRouter1.get('/add1',function(req,res){
        res.send("New Book added Successfully");
        });
    
    return adminRouter1;
}
module.exports=router;
