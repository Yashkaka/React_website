const mongoose = require('mongoose')
const DB ='mongodb+srv://yashkaka:yashkaka@cluster0.7klktf8.mongodb.net/admindetails?retryWrites=true&w=majority'


mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
}).then(()=>{
    console.log('connection sucessful');
}).catch((err) =>
console.log('no connection'));