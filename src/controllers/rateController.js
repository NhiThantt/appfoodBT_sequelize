import { DATE } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";


let model = initModels(sequelize);

const rateRes = async(req,res) => {
    const {user_id , res_id, amount } = req.body
    let checkRate = await model.rate_res.findOne({
        where:{
            user_id,
            res_id,
            
        }
    })
    if(!checkRate) {
        let newData = {
            user_id,
            res_id,
            amount,
            date_rate:new Date()
        }
        await model.rate_res.create(newData)
        res.send(newData);
    } else {
        res.send("Đã thực hiện đánh giá trước đó");
    }
    
};

const getRateByRes = async (req,res) => {
    const {resId} = req.params;
    
    let data = await model.rate_res.findAll({
        where:{
            res_id: resId
        }
    })
    res.send(data);
};

const getRateByUser = async (req, res) => {
    let {userId} = req.params;

    let data = await model.rate_res.findAll ({
        where: {
            user_id: userId
        }
    })
    res.send(data);
}


export {rateRes, getRateByRes,getRateByUser};