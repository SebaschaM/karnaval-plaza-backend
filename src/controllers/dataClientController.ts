import { Request, Response } from "express";
import connection from "../db/connection";

const insertDataClient = async (req: Request, res: Response) => {
  try {
    const { name, email, birthday } = req.body;

    if (!name || !email || !birthday) {
      return res.status(400).json({
        message: "Please, fill all fields",
      });
    }

    const queryDuplicateEmail = `SELECT * FROM cliente WHERE correo = ?`;
    const [existingEmail] = await connection.query(queryDuplicateEmail, [
      email,
    ]);

    if (Array.isArray(existingEmail) && existingEmail.length > 0) {
      return res.status(404).json({
        message: "Correo ya registrado",
      });
    }

    const queryInsertClient = `INSERT INTO cliente (nombre, correo, fecha_nacimiento) VALUES (?, ?, ?)`;
    await connection.query(queryInsertClient, [name, email, birthday]);

    return res.status(200).json({
      ok: true,
      message: "Registro exitoso",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export { insertDataClient };
