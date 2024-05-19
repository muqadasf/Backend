
import registeruser from '../Models/student.js';
import bcrypt from "bcrypt";
import { configDotenv } from 'dotenv';
import JWT from 'jsonwebtoken';
import multer from 'multer';
import path from "path"



const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.send({
                message: "Required Field"
            })
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const saveuser = registeruser({ name, email, password: hashpassword }).save();
        res.status(201).send({
            message: "student User create"
        })
    }
    catch (error) {
        console.log(error)
        res.status(501).send({
            message: "Server error"
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userlogin = await registeruser.findOne({ email: email});
        

        const token = JWT.sign({id:"_id"}, `${process.env.PRIVATEKEY}`, {expiresIn:'10s'} );
        console.log(token);
        
        if (!userlogin) {
            res.send({
                messge: "Login not ok"
            })
        }
        else {
            res.status(200).send({
                message: "login ok"
            })
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Server error"
        })
    }
}

const updatestudent = async (req, res) => {
    try {
        const main = await registeruser.updateOne({ ...req.body });
        if (main) {
            res.status(401).send({
                success: true,
                message: "user update ok"
            })
        }

        else {
            res.send({
                success: false,
                message: "user update notok"
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error occur"
        })

    }
}
const deletestudent = async (req, res) => {
    try {
        const main = await registeruser.deleteMany({ ...req.body });
        if (main) {
            res.status(401).send({
                success: true,
                message: "user delete ok"
            })
        }

        

        else {
            res.send({
                success: false,
                message: "user delete notvok"
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error occur"
        })

    }
}


const registerprofileupload = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        const profileimages = req.file;

        if (!name || !email || !password || !profileimages) {
            return res.status(400).send({
                message: "Required Field"
            });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        
        // Assuming req.file contains the path to the image file
        const saveuser = await registeruser({
            name,
            email,
            profileimage: profileimages.path, // Save the file path or buffer
            password: hashpassword
        }).save();

        console.log(saveuser);
        return res.status(201).send({
            message: "Student user created"
        });
    } catch (error) {
        console.log(error);
        return res.status(501).send({
            message: error.message
        });
    }
};






export { register, login, deletestudent, updatestudent, registerprofileupload};






// //Send email

// // pack use nodemailer
// // gmail ko host ke tor pe lena hai
// // 1. manage google account 
// // 2. securty 
// // 3. 2 step verfication 
// // 4. acccount login 
// // 5. app password apni app ka name dena hai 
// // 6. passowrd copy


