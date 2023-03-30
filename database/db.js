import { Sequelize } from "sequelize";
/*
const db = new Sequelize("dartearte", "root", "password", {
  host: "localhost",

  dialect: "mysql",
});*/

const db = new Sequelize(
  "learningdb",
  "gmmm3r9ejx7pvs2yzoap",
  "pscale_pw_gQXQKaD0YqehIkiIG1VEUrVxwMnUSqROUz6mjAUR3mY",
  {
    host: "aws.connect.psdb.cloud",

    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  }
);

export default db;
