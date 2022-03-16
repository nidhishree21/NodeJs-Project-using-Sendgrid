const sgMail = require('@sendgrid/mail')

const API_KEY = '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';

sgMail.setApiKey(API_KEY)
const message={
    to: 'nidhishreepolali2018@gmail.com',
  //  from : 'raonidhishree@gmail.com',
    from :{
        name : 'SENDER',
        email : 'raonidhishree@gmail.com',
    },
    subject : 'Hello from sendgrid',
    text : 'Hello  this email is from Sender using sendgrid to  client nidhishree',
    html : '<h1>Hello from sendgrid</h1>',

};
sgMail.send(message)
.then((response)=>console.log('Email sent....'))
.catch((error)=>console.log(error.message));