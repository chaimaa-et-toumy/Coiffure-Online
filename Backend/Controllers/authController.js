const User = require('../Models/UserModel');
const Role = require('../Models/roleUserModel');
const generateToken = require('../Utils/generateToken');
const { sendEmail, forgetPassword } = require('../Utils/sendEmail')
const bycrpt = require('bcryptjs')
const crypto = require('crypto')
let ls = require('local-storage');
const jwt = require('jsonwebtoken')



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
            else if (user.isVerifed) {
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

// method : post
// url : api/auth/register
// acces : Public
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
        await sendEmail(req, user_, res)
        if (user_) {
            res.status(201).json({
                _id: user_._id,
                name: user_.username,
                email: user_.email,
                role: user_.role.role
            })
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
}

//method : post
// url : api/auth/forgetPassword
// acces : Public
const ForgetPassword = async (req, res) => {
    const { email } = req.body
    if (!email) {
        res.status(400).send("email is required")
    }
    try {
        const user = await User.findOne({ email })
        if (user) {
            await forgetPassword(req, user, res)
            res.status(200).json({
                _id: user.id,
                email: user.email,
                etoken: jwt.sign({ _id: user.id }, process.env.JWT_SECRET, { expiresIn: '10m' }),
                msg: res.err
            })
        }
        else {
            res.status(404).send("user not found")
        }
    } catch (error) {
        console.log(error)
    }
}


// method : post
// url : api/auth/resetpassword
// acces : public

const resetpassword = async (req, res) => {
    const password = req.body.password
    let token = req.params.token
    const salt = await bycrpt.genSalt(10)

    if (!password) {
        res.status(400).send("password is required")
    }

    try {
        const user = await User.findOne({ eToken: token })
        if (!user) {
            res.status(404).send("user not found")
        }
        if (user.isReset === true) {
            user.password = await bycrpt.hash(password, salt)
            res.status(200).send("password is reset")
            await user.save()
        }
        else {
            res.status(400).send("password is not reset")
        }
    } catch (err) {
        console.log(err.message)
    }
}


//function to reset password
const verify_email_rest = async (req, res) => {
    try {
        let token = req.params.token
        const user = await User.findOne({ eToken: token })
        if (user) {
            user.isReset = true
            await user.save()
            res.status(200).send("password is verified")
        }
        else {
            res.send("password is not verified")
        }
    } catch (error) {
        console.log(error)
    }
}

//function to verify email
const verify_email = async (req, res) => {
    try {
        const token = req.params.token
        const user = await User.findOne({ eToken: token })
        if (user) {
            user.isVerifed = true
            await user.save()
            console.log("email is verified")
        }
        else {
            console.log("email is not verified")
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    verify_email_rest,
    verify_email,
    resetpassword
}