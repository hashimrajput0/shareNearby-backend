import { publicModel } from "../models/public.model.js"


async function getPublicData(req, res) {

    try {

const forwardedFor = req.headers["x-forwarded-for"];

        const ip = forwardedFor
            ? forwardedFor.split(",")[0].trim()
            : req.ip;

        console.log("CLIENT IP:", ip);


        console.log("req.ip:", req.ip);
console.log("x-forwarded-for:", req.headers["x-forwarded-for"]);
console.log("cf-connecting-ip:", req.headers["cf-connecting-ip"]);
        
        if(!ip) {
            return res.status(400).json({
                message : "We are unable to access your IP"
            })
        }

        const data = await publicModel.findOne({
            ip : ip
        })

        if(data) {
            return res.status(200).json({
                message : "Data Already Exists!",
                data : data
            })
        }   else  {
            return res.status(200).json({
                message : "Data does not Exist!",
                data : ""
            })
        }

    } catch(err) {
        return res.status(500).json({
            message : "Internal Server Error",
            error : err.message
        })
    }
}

async function createPublicData(req, res) {

try {

const forwardedFor = req.headers["x-forwarded-for"];

        const ip = forwardedFor
            ? forwardedFor.split(",")[0].trim()
            : req.ip;

        console.log("CLIENT IP:", ip);
    
    const { text } = req.body

        if(!ip) {
            return res.status(400).json({
                message : "We are unable to access your IP!"
            })
        }

        let data = await publicModel.findOne({
            ip : ip
        })

        if(data) {
            
            data.text = text
            await data.save()

        } else {
                data = await publicModel.create({
                ip, text
            })
        }
        return res.status(200).json({
            message : "Sucessfully Uploaded",
            data
        })    
    } catch(err) {
    return res.status(500).json({
        message : "Internal Server Error",
        error : err.message
   
    })
}
}

export { getPublicData, createPublicData }
