import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, name, mobile, address } = {}) => {
  return true;
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "whiteclawstudios@gmail.com",
      pass: "wcstudios",
    },
  });
  // please turn on allow less secure apps in your gmail setting
  let info = await transporter.sendMail({
    from: "SSE services", // sender address
    to: `whiteclawstudios@gmail.com`, // list of receivers
    subject: "New request has been placed", // Subject line
    text: `
    Hi , I want to place a request.
    The below are my details
    email : ${email}
    name : ${name}
    mobile : ${mobile}
    address : ${address}
    
    `, // plain text body
  });

  return new Promise((resolve, reject) => {
    if (info.messageId) {
      console.log("Email sent successfully");
      resolve(info.messageId);
    } else {
      reject("Something went wrong while sending email");
    }
  });
};
