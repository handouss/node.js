var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'bettayeb.amor@yahoo.com',
    pass: '**************'
  }
});

var mailOptions = {
  from: 'bettayeb.amor@yahoo.com',
  to: 'amor.bettaieb@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! ihave finished the checkpoint of NODE Yeaaaaaahhhhh'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});