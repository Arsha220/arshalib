const express=require("express");
const app=new express();
const port=process.env.port||3211;
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/sign',name:'SignUp'
    },
    {
        link:'/admin',name:'AddBook'
    },
    {
        link:'/admin1',name:'AddAuthor'
    },
    {
        link:'/logout',name:'Logout'
    },
];

const booksRouter=require('./src/routes/bookRoutes.js')(nav)
const authorRouter=require('./src/routes/authorRoutes.js')(nav)
const adminRouter=require('./src/routes/adminRoutes.js')(nav)
const adminRouter1=require('./src/routes/admin1Routes.js')(nav)
const loginRouter=require('./src/routes/loginRoutes.js')(nav)
const signupRouter=require('./src/routes/signupRoutes.js')(nav)


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/admin1',adminRouter1);
app.use('/login',loginRouter);
app.use('/sign',signupRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library',
    });
});

app.listen(port,()=>{console.log("Serveris ready at "+port)});