import express , {Request, Response} from "express";
import mongoose from "mongoose";
export const getuser = express();
 
interface responseObject {
  code: string;
  status: string;
  data: object;
}

const getuserSchemas = new mongoose.Schema({
  userID:String,
  userName:String,
  NationID:String,
  userpass:String,
  Email:String,
  PhoneNum:String,
  sessionID:String,
  courseID:String,
  courseName:String,
  courseDescpt:String,
  coursestt:Boolean,
  status:String,
  Code:String,
  message:String,

})
const Getuser = mongoose.model('userids',getuserSchemas);
getuser.post('/getuserid', async(rq: Request,rs: Response) => {
  await mongoose.connect('mongodb://BondTrader:1234@localhost:27017/BondTrader?authSource=BondTrader');
  const body:any = rq.body;
  const dbResponse = await Getuser.find({userID:body.userID})
  mongoose.connection.close()
  return rs.status(200).json({
    code: "Success-01-0001",
    status: "Sucess",
    data: dbResponse, 
  })
})