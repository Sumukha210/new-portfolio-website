import axios from "axios";
import nodemailer from "nodemailer";

// verify
export const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTHA_SECRET_KEY;

  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    token;

  return await axios.post(verificationUrl);
};

// send mail
export const sendMail = async (
  name: string,
  email: string,
  message: string
) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    host: "smtp.gmail.com",
    name: "Mailer",
    port: 587,
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: "sumukhakb210@gmail.com", // list of receivers
      subject: `${email} is contacted you from www.https://sumukhakb210.in website!!`, // Subject line
      text: "Reach out with you", // plain text body
      html: `
      <h3>Name:- ${name}</h3>
      <h3>Email:- ${email}</h3>
      <p>Message:- ${message}</p>
      `, // html body
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log("Failed to send", error);
  }
};
