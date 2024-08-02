import express from 'express';
import {
  getAlumnoByID, getAlumnos, getClases, getMonitorByID, getMonitores, getPersonaByID, getPersonas, getRecursos
} from './database.js';

const app = express();
app.use(express.json());

app.get("/getPersonas", async (req, res) => {
  const personas = await getPersonas();
  res.status(200).send(personas);
})

app.get("/getMonitores", async (req, res) => {
  const monitores = await getMonitores();
  res.status(200).send(monitores);
})

app.get("/getAlumnos", async (req, res) => {
  const alumnos = await getAlumnos();
  res.status(200).send(alumnos);
})

app.get("/getClases", async (req, res) => {
  const clases = await getClases();
  res.status(200).send(clases);
})

app.get("/getRecursos", async (req, res) => {
  const recursos = await getRecursos();
  res.status(200).send(recursos);
})

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

app.listen(8080, () => {
  console.log("Server en funcionamiento!");
});