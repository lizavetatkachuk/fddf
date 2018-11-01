var sequelize = new Sequelize('crypto_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});
const User = sequelize.define('users', {
    email: {type: Sequelize.STRING,allowNull:false,unique:true,primaryKey:true },
    password: Sequelize.STRING,allowNull:false
},{
    setterMethods: {
    fullName(pas,em) {


        this.setDataValue('email', em);
        this.setDataValue('password',pas);
    }
}
})

module.exports=sequelize,User;