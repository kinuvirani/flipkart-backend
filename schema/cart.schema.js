module.exports=(sequelize,type)=>{
    return sequelize.define('cart',{
        userId:{
            type:type.UUID,
            allowNull:false
        },
        productId:{
            type:type.INTEGER,
            allowNull:false
        },
        quantity:{
            type:type.INTEGER,
            defaultValue:1
        },
        isBought:{
            type:type.INTEGER,
            defaultValue:0
        }
    })
}