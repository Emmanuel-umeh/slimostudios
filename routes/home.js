const express = require("express")
const router = express.Router();





    router.get("/",(req,res)=>{
        res.render('index.ejs')
    })

    /** ABOUT ROUTE/PAGE */
        router.get("/about", (req, res) => {
            res.render("home/about.ejs")
        })
    /** ABOUT ROUTE/PAGE */


    /** CONTACT ROUTE/PAGE */
        router.get("/contact", (req, res) => {
            res.render("home/contact.ejs")            
        })
    /** CONTACT ROUTE/PAGE */
    

    /**SERVICES ROUTE/PAGE */
    router.get("/male-models", (req, res) => {
        res.render("home/MaleModels.ejs")            
    })

    router.get("/female-models", (req, res) => {
        res.render("home/femaleModels.ejs")            
    })

    router.get("/nature", (req, res) => {
        res.render("home/nature.ejs")            
    })
    router.get("/wildlife", (req, res) => {
        res.render("home/wildlife.ejs")            
    })



module.exports = router





