exports.getLoginPage = (req,res)=>{

    res.render("auth/loginPage",{currentPage:"login"});
}