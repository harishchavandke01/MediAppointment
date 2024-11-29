import jwt from 'jsonwebtoken'

//doctor authentication middleware
const autoDoctor= async(req,res,next)=>{
    try {
        
        const {dtoken}=req.headers
        if(!dtoken)
        {
            return res.json({success:false,message:"Not Authrized login again"})
        }
        const tokan_decode = jwt.verify(dtoken,process.env.JWT_SECRET)

        req.body.docId = tokan_decode.id

        next()

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export default autoDoctor