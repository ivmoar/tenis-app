import mariadb from 'mariadb';
import dotenv from 'dotenv' // El archivo está oculto, pero si existe
dotenv.config();// El archivo está oculto, pero si existe

const pool = mariadb.createPool({
     host: process.env.MARIADB_HOST, // El archivo está oculto, pero si existe -> '127.0.0.1'
     user:process.env.MARIADB_USER, // El archivo está oculto, pero si existe -> 'app_main'
     password: process.env.MARIADB_PASSWORD,// El archivo está oculto, pero si existe -> 'ctvillacarmen'
     database: process.env.MARIADB_DATABASE,// El archivo está oculto, pero si existe -> 'club_tenis_villacarmen'
     connectionLimit: 5
});

pool.getConnection()
    .then(conn => {
        // Conexión exitosa
        console.log('Conexión exitosa a la base de datos');
        conn.end(); // Cerrar la conexión después de la verificación
    })
    .catch(err => {
        // Error en la conexión
        console.error('Error al conectar a la base de datos:', err);
    });

export async function getPersonas() {
    const rows = await pool.query(
        `SELECT * FROM personas`
    );
    return rows;
}

export async function getPersonaByID(id) {
    const row = await pool.query(
        `SELECT * FROM personas WHERE id = ?`,
        [id]
    );
    return row[0];
}

export async function getMonitores() {
    const rows = await pool.query(
        `SELECT * FROM monitores`
    );
    return rows;
}

export async function getMonitorByID(id) {
    const row = await pool.query(
        `SELECT * FROM monitores WHERE id = ?`,
        [id]
    );
    return row[0];
}

export async function getAlumnos() {
    const rows = await pool.query(
        `SELECT * FROM alumnos`
    );
    return rows;
}

export async function getAlumnoByID(id) {
    const row = await pool.query(
        `SELECT * FROM alumnos WHERE id = ?`,
        [id]
    );
    return row[0];
}

export async function getClases() {
    const rows = await pool.query(
        `SELECT * FROM clases`
    );
    return rows;
}

export async function getRecursos() {
    const rows = await pool.query(
        `SELECT * FROM recursos`
    );
    return rows;
}