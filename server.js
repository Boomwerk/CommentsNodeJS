const express = require("express");
let app = express();
let bodyParser = require("body-parser");
let session = require("express-session");
const message = require("./models/message");


// nos moteur de templates
app.set('view engine', 'ejs');

// nos middleWare
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(session({
    secret: 'azazaezezeze',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}))
app.use(require("./middlewares/flash"));



// nos route
app.get('/', (request, response)=>{
   

    message.all(function(message){
        response.render('pages/index', {messages : message});;
    })

    
})

app.post('/', (request, response)=>{
   
    
    if(request.body.message === undefined || request.body.message === ''){
        request.flash('error', "vous n'avez pas donnez de messages !")
        response.redirect("/")
    }else{
        let message = require("./models/message");
        message.create(request.body.message, function(){
            request.flash('success', "Merci !")
            response.redirect("/")
        })
        
    }

    
})

app.listen(8020)