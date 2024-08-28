const dotenv = require("dotenv")
const express = require("express")
const app = express()
dotenv.config()
const mailer = require("nodemailer")

app.use(express.json())

app.post("/api/sendEmail", (req, res) => {

    const { email, message, name, lastName } = req.body



    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "ntnrmedia@gmail.com",
            pass: process.env.EMAIL_PASS
        }
    })

    const mailInfo = {
        from: "ntnrmedia@gmail.com",
        to: "ntnrmedia@gmail.com",
        subject: `Nowa Wiadomość od ${email}`,
        text: `Email od: ${email} \nImię: ${name}  \nNazwisko: ${lastName} \nWiadomość:  ${message}`
    }

    transporter.sendMail(mailInfo, (error, info) => {
        if (error) {
            console.log(error)
            res.send("error")
        } else {
            res.send("Email send succesfully" + info.response)
        }
    })
    
})


app.listen(64878, "127.0.0.1", () => {})
