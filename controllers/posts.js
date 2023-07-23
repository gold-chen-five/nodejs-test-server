import path from 'path'
import fs from 'fs'
/* CREATE */
export const createPost = async (req,res) => {
    try{
        const {picture} = req.body
        const base64Data = picture.replace(/^data:image\/png;base64,/, "");
        const uploadPath = 'public/assets'
        const fileName = 'assets.png'
        fs.writeFileSync(path.join(uploadPath,fileName), base64Data, 'base64')
        res.status(201).json({message: 'image upload successful'})
    }
    catch(err){
        res.status(409).json({ message: err.message})
    }
}