import express, {Request,Response} from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { getuser } from "./getuser/route";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/getusers",getuser);

// app.use("/", (req: Request, res: Response) => {
//   res.send("ก็มาดิ่ค้าบ");
//  });

/**
 * @swagger
 * /getuserid:
 *   post:
 *     summary: Get user details by userID
 *     tags:
 *        - Get user details by userID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userID:
 *                 type: string
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: User information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                   example: "Success-01-0001"
 *                 status:
 *                   type: string
 *                   example: "Success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       userID:
 *                         type: string
 *                         example: "12345"
 *                       userName:
 *                         type: string
 *                         example: "John Doe"
 *                       NationID:
 *                         type: string
 *                         example: "US12345678"
 */

 const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log(`Server is listening on port ${PORT}`);
});

