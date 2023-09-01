import mongoose from "mongoose";

async function connect() {
    await mongoose.connect("mongodb+srv://dew:a0zDaa1wL1pSwKBI@mern-trial.refhnfk.mongodb.net/?retryWrites=true&w=majority" 
    )
    console.log('mongoDB connection is successful');
} 

export default connect;

