import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

export default function (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
        res.json({method: "POST"});
    }
    res.json({status: "ok"});
}