const User = require('../Models/UserModel');
const Role = require('../Models/roleUserModel');
const generateToken = require('../Utils/generateToken');
const bycrpt = require('bcryptjs')
const crypto = require('crypto')
let ls = require('local-storage');



// method : post
// url : api/auth/login
// acces : Public
const Login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send("please enter a username and password")
    }

    try {
        const user = await User.findOne({ email }).populate("role")
        const isMatch = await bycrpt.compare(password, user.password)
        if (user) {
            if (!isMatch) {
                res.status(400).send("Invalid credentials")
            }
            if (user.isVerifed) {
                let token = generateToken(user._id, user.email, user.name)
                ls('token', token)
                res.status(200).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role.role,
                    token: token
                })
            } else {
                res.status(401).send("first verify your email address to login")
            }
        } else {
            res.status(404).send("User not found")
        }
    } catch (err) {
        console.error(err);
    }
}

const Register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // check if user exist
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400).send("User already exist")
        return
    }

    // hash password
    const salt = await bycrpt.genSalt(10)
    const haschedPassword = await bycrpt.hash(password, salt)

    const roles = await Role.findOne({ role: 'Client' })

    try {
        const user_ = await User.create({
            username,
            email,
            password: haschedPassword,
            eToken: crypto.randomBytes(64).toString('hex'),
            isVerifed: false,
            role: roles._id
        })
        if (user_) {
            res.status(201).json({
                name: user_.name,
                email: user_.email,
                role: user_.role,
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
}


module.exports = {
    Login,
    Register,
}