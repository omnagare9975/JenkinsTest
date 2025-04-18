const express = require('express')
const app = express()
const PORT = 8000
const path = require('path')

app.set('view engine' , 'ejs')
app.set("views" , path.join(__dirname , "views"))


app.get('/' , (req , res)=>{
    res.render('main')
})

app.listen(PORT , ()=> console.log(`SERVER IS RUNNING ON PORT ${PORT}`))