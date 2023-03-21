import { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import User from '@/models/User';

export default async function (req: NextApiRequest, res: NextApiResponse) {    
    const mongoose_url = process.env.NEXT_PUBLIC_MONGO_URL;
    await mongoose.connect(mongoose_url);

    console.log(User);
    if(req.method === "POST") {
        const newUser = await new User(req.body);
        await newUser.save();
        console.log("Here");
        
        res.json({msg: "OK"});
        //Create new user
    }
}