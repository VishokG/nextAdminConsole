import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import mongoose from 'mongoose';
import User from '@/models/User';

export default async function (req: NextApiRequest, res: NextApiResponse) {    
    const {user_id} = req.query;

    const mongoose_url = process.env.NEXT_PUBLIC_MONGO_URL;
    await mongoose.connect(mongoose_url);

    console.log(User);
    if(req.method === "GET") {
        if(user_id === "all") {
            const users = await User.find();
            res.json(users);
        } else {
            const user = await User.findById(user_id)
            res.json(user);
        }
    } else if(req.method === "POST") {
        const newUser = await User.create(req.body);
        await newUser.save();
        //Create new user
    } else if(req.method === "PUT") {
        await User.findOneAndUpdate({_id: user_id}, req.body);
    } else if(req.method === "DELETE") {
        await User.findOneAndDelete({_id: user_id});

    }
    
}