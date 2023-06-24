import { DataSource } from "typeorm";

// module.exports = pool;

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "saquib12345",
  database: "employee",
  synchronize: true,
  entities: ["./Entity/user.js"],
});
