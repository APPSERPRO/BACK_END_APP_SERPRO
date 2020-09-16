//DATA BASE CONFIG OBJECT 
const dbconfig = {
    HOST: "mongodb+srv",
    USER: "saberProPoli",
    PASSWORD: "6sXyfujsZ55c4GF",
    DB: "SaberPro",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;