const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false  
})




// const nodejs = new Task({
//     description: "     Nodejs developer    ",
    
// })

// nodejs.save().then(() => {
//     console.log('Success!', nodejs)
// }).catch((error) => {
//     console.log('Error', error)
// })