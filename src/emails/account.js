const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        form: 'adarsh1999srivastav@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to app, ${name}. Let me know how you get along with the app`

    })
}

const sendGoodByeEmail = (email , name) => {
    sgMail.send({
        to: email,
        from: 'adarsh1999srivastav@gmail.com',
        subject: 'Sorry to see you going!',
        text: `Good Bye ${name}. Do give your feedback`
    })
}

module.exports  = {
    sendWelcomeEmail ,
    sendGoodByeEmail
}