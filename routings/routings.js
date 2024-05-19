import express from "express";
const router = express.Router();
import {register,login, deletestudent,updatestudent,registerprofileupload} from '../Controller/studentregister.js';
import sendmail from "../nodemailer/sendEmail.js"

import multer from "multer"
const upload = multer({ dest: './upload' });



router.post('/register', register);
router.get('/login', login);
router.delete('/deletestudents', deletestudent);
router.put('/updatestudents/:id', updatestudent);
router.post('/sendmail',sendmail);
router.post('/registerprofileimage', upload.single("profileimages") ,registerprofileupload);


export default router;


