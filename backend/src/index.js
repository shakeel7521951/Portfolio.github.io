const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const User = require("./schema");
require('./db');
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());



app.post("/signup", async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        const hashPassword = await bcrypt.hash(password,10);

        const user = ({
            name: name,
            email: email,
            password: hashPassword
        });
        let result = new User(user);

        const signupUser = await result.save();
        res.send(signupUser);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({ email });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                res.send(user);
            } else {
                res.status(401).send("Email and password do not match");
            }
        } else {
            res.status(404).send("User does not exist");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Port is running at ${port}`);
})
