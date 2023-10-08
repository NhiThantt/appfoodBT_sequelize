
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";

const model = initModels(sequelize)

const orderFood = async(req, res) =>{
    const {user_id,food_id,amount,code,arr_sub_id} = req.body
       let data = {
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id
    }
    await model.orders.create(data)

    res.send(data);
};


export default orderFood;