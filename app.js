const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000)

app.get("/", (req ,res) => {
    let style = "color:green"
    let monday = ""
    if (new Date().getDay()== 1) {
        monday = "YES"
    } else {
        monday = "NO"
        style = "color:red"
    }
    res.render('index',{monday,style});

})