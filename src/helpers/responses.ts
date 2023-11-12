import { Request, Response } from "express";
function successMsg  (res: Response, req:Request, object:string = "OK", status:number = 200){
    res.status(status).json({
        error: false, 
        status: status,
        body: object
    })
}

function errorMsg (res: Response, req:Request, object:string= "ERROR INTERNAL", status:number = 500){
    res.status(status).json({
        error: true, 
        status: status,
        body: object
    })
}
export{
    successMsg,
    errorMsg
}