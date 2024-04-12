
/* GET */
export const getTest = async (req,res) => {
    try{
        res.status(200).json({message: 'test'})
     }catch(error){
         res.status(404).json({message: error.message})
     }
}


export const getParams = async (req, res) => {
    try{
       const { id } = req.params
       console.log(id)
       res.status(200).json({id: id})
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}

export const getQuery = async (req, res) => {
    try{
       const { id } = req.query
       console.log(id)
       res.status(200).json({id: id})
    }
    catch(err){
        res.status(404).json({error: err.message})
    }
}

/* POST */
export const postTest = async (req,res) => {
    try{
        const body = req.body
       
        res.status(200).json(body)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}
