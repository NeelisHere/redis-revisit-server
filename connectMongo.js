const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{ console.log('Connected to MongoDB...') })
        .catch((e)=>{ console.log(e) })
}
module.exports = connectDB