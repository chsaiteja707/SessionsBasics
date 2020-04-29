exports.index=((req,res,next)=>{
    const value=req.params.value;
    var formType='noform';
    if(value==='signup')
        formType='signup';
    else if(value==='login')   
        formType='login';
    req.session.destroy((err)=>{
        res.render('index',{
            isLoggedIn:req.session?true:false,
            formType:formType
        });
    });
})


exports.postLogin=((req,res,next)=>{
    req.session.isLoggedIn=true;
    res.render('index',{
        isLoggedIn:req.session?true:false,
        formType:'noForm'
    });
})

exports.postSignup=((req,res,next)=>{
    req.session.destroy(err=>{
        res.redirect('/');
    })
})

exports.postLogout=((req,res,next)=>{
    req.session.destroy((err)=>{
        console.log(err);
         console.log(req.session);
        res.render('index',{
            isLoggedIn:req.session?true:false,
            signupForm:false,
            loginForm:false
        });
    });
})

