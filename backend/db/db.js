import mongoose, {Mongoose, mongo} from "mongoose";

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected successfully!')
    } catch (error) {
        console.log('DB Connection error :' + error)
    }
}

export default db