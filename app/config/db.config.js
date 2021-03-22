module.exports = {
    HOST: "dashboardapi.postgresql.dbaas.com.br",
    USER: "dashboardapi",
    PASSWORD: "pucminas@21",
    DB: "dashboardapi",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};