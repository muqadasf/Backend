import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: "fmuqadas2001@gmail.com",
    pass: "nypz yjwc lylf ehir",
  },
});



const mailOptions = {
    from: "fmuqadas2001@gmail.com",
    to: "fmuqadas2001@gmail.com",
    subject: "Hello from Nodemailer",
    text: "This is my test mail",
};




const sendMail = (req, res) => {
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send({
                    message: "Failed to send mail",
                    error: error.message
                });
            } else {
                res.send({
                    message: "Mail sent successfully",
                    info: info.response
                });
            }
        });
    } catch (err) {
        res.send({
            message: err.message
        });
    }
};

export default sendMail;