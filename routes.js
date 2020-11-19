const User = require('./models/UserModel.js')

module.exports = function(app){
    app.get("/", (req,res) => {
        res.send("Hello get");
    })
    
    app.get("/users", (req,res) => {
        User.find(function(err, users){
            console.log(users)
            if (err)
                res.send(err);
            res.json(users);
        });
    })
    
    app.post("/users", (req,res) => {
        res.json(users);
    })
}