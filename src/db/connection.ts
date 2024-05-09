import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "151.106.97.102",
  user: "u777467137_rootplaza",
  password: "@4CO[6ooJr",
  database: "u777467137_plazkarnas1231",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testConnection() {
  try {
    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    console.log("Conexión a MySQL exitosa.");
  } catch (err) {
    console.error("Error al conectar a MySQL:", err);
  }
}

testConnection();

export default connection;
