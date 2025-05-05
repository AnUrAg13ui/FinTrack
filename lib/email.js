import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    auth: {
      user: "fintrack2410@gmail.com",
      pass: "lvty wssq mzwg uhoc",
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
        },
    });


export const sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from:"fintrack2410@gmail.com",
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export const sendBudgetExceededEmail = async (to, budget) => {
  const subject = 'Budget Exceeded Alert';
  const text = `Alert! Your budget of ${budget} has been exceeded.`;
  await sendEmail(to, subject, text);
}


