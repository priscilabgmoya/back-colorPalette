import { Request, Response } from "express";
import { ColorPalette, ColorRequest } from "../types/types";
import {errorMsg ,successMsg} from '../helpers/responses'; 
import { randomUUID } from "crypto";
const colors: ColorPalette[] = [];
function createNewPalette(req: Request, res: Response) {
    const { title, color_1, color_2, color_3, color_4 }: ColorRequest = req.body;
    const values = [color_1, color_2, color_3, color_4];
    const map: Map<string, number> = new Map();
    values.forEach(value => {
        if(map.has(value)){
            const ref = map.get(value); 
            if(ref) map.set(value, ref+1); 
        }else {
            map.set(value, 1);
        }
    });
    let repeated: boolean = false; 
    map.forEach((value, key) =>{
        if(value > 1) repeated = true; 
    }); 
    if(repeated) errorMsg(res,req,"color are repeated", 400); 
    colors.push({
        id: randomUUID(), 
        title: title,
        color_1: color_1,
        color_2: color_2,
        color_3: color_3,
        color_4: color_4,
    })
    successMsg(res, req, "create color palette", 201); 
}
function getColorPalette(req: Request, res: Response){
    res.status(200).json(colors); 
}
export { createNewPalette ,getColorPalette}