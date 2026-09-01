//config the SMTP
import nodemailer from "nodemailer";
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

//Email processor

const emailPreocessor = async (template) => {
  try {
    const result = await transporter.sendMail(template);
    console.log(result.messageId);
  } catch (error) {
    console.log(error);
  }
};
//create the emial processor send out the email
export const userUpdateTemplate = () => {
  const obj = {
    from: '"Yadin" <giovani.willms@ethereal.email>', // sender address
    to: "giovani.willms@ethereal.email", // list of recipients
    subject: "Hello", // subject line
    text: "The First email ?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  };

  emailPreocessor(obj);
};
//function to create email template
