module.exports=(sequelize,type)=>{
    return sequelize.define('Product',{
        productId:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        productCategoryId:{
            type:type.INTEGER,
            // allowNull:false
        },
        subCategoryId:{
            type:type.INTEGER,
            allowNull:false
        },
        categoryId:{
            type:type.INTEGER,
            allowNull:false
        },
        productName:type.STRING,
        productBrand:type.STRING,
        productPrice:type.INTEGER,
        productDescription:type.STRING,
        productImage:type.STRING,
        status:{
            type:type.INTEGER,
            defaultValue:1
        },
        quantity:{
            type:type.INTEGER,
            defaultValue:1
        },
        offer:{
            type:type.INTEGER
        },
        startDate:{
            type:type.DATE
        },
        endDate:{
            type:type.DATE
        }
    })
}