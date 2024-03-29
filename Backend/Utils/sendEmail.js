const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaimaetoumy5@gmail.com',
        pass: 'khsullabyhxouojh'
    }
});

// for verified email

const sendEmail = (req, user, res) => {
    const mailOptions = {
        from: ' "Verify your email" chaimaetoumy5@gmail.com',
        to: user.email,
        subject: 'Verify your email',
        html: `<h2> Dear  ${user.username}! thanks for registering on our site</h2>
                <h4> please verify your mail to continue ... </h4>
                <a href="http://${req.headers.host}/api/auth/verify_email/${user.eToken}" >Verify your Email</a>`
    };

    try {
        transporter.sendMail(mailOptions)
        res.message = "verification is sent to your email, go to verification and click the button below to login"
    } catch (error) {
        res.message = error.message || 'error'
    }
};

// for forget password
const forgetPassword = (req, user, res) => {
    const mailOptions = {
        from: ' "Verify your email" chaimaetoumy5@gmail.com',
        to: user.email,
        subject: 'Account Activation link',
        html: `<h4> please click on given link to reset your password </h4>
            <a href="http://${req.headers.host}/api/auth/forgetPassword/${user.eToken}" >click to reset password</a>`
    };
    try {
        transporter.sendMail(mailOptions)
        res.err = 'the link to reset password is sent to your gmail account'
    } catch (error) {
        res.err = error.err || 'error'
    }


};

module.exports = { sendEmail, forgetPassword }