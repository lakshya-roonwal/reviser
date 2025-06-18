import { Request, Response } from "express";

export const incomdingMessage = (req:Request, res:Response) =>{
    const body = req.body;
    console.log('body',body);
    res.status(200).json({success : true, message : 'working fine'});
}