import mongoose from "mongoose";

const newstudentregister = new mongoose.Schema({
    name:{
        required: true,
        lowercase:true,
        type:String
    },  

    email:{
        required: true,
        type:String,
        unique:true
    },

    password:{
        required: true,
        type:String
    },

    profileimages:{
        data: Buffer,
        contentType: String
    }

    // profileimages: { type: String, required: true }
});

const registeruser = mongoose.model("user", newstudentregister);


export default registeruser;

// // ye ek schema bana rhae hain login wagera
// //Schema ek fun hai 
// //student ek collection name hai

// // new ek keyowrd hai ye means hamra new schema ban raha hai 

// // ye ek restul api bana rahe hain means customize api

// // ye ek database ka design hum create kar rahe hain 
// // import mongoose from "mongoose";

// //  const studentuser = {mongoose.Schema("student" , (new Schema(
// // 'firstName':{ type:string ,required:true , lowercase:true},
// // 'email':{type:Email , required:true },
// // 'age' :{type:Number , min:19 , max:30 , required:false}
// // )))}





