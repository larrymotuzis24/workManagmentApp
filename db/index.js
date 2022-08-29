const Sequelize = require('sequelize');
const { STRING } = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/workmanagmentdb');


const User = conn.define('user', {
    userName:{
        type: STRING, 
        allowNull: false
    }, 
    firstName: {
        type: STRING,
        allowNull: false
    }
});


const seeder = async() => {
    await conn.sync({ force:true });
    await User.create({userName:'larry12', firstName:'Larry'})
};

module.exports = {
    conn, 
    User 
};