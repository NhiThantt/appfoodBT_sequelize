
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);


const likeRes = async (req, res) =>{
    const {user_id , res_id } = req.body
    let checkLike = await model.like_res.findOne({
        where:{
            user_id,
            res_id
        }
    })
    if(!checkLike) {
        let newData = {
            user_id,
            res_id,
            date_like : new Date()
        }
        await model.like_res.create(newData)
        res.send(newData)
    } else {
        await model.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        })
        res.send("Hủy like")
    }
   
}

const getLikeByRes = async (req,res) => {
    let {resId} = req.params
    
    let data = await model.like_res.findAll({
        where : {
            res_id : resId
        }
    })
    res.send(data);
}


const getLikeByUser = async (req, res) => {
    let {userId} = req.params
    
    let data = await model.like_res.findAll({
        where : {
            user_id : userId
        }
    })
    res.send(data);
  };


export {likeRes, getLikeByRes, getLikeByUser }