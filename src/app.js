//importo express
const express = require("express");
const usersRouter = require("./users/users.router");

//creo una instancia de express
const app = express();
//creo una constante para el puerto
const port = 9000;
//app use un formato JSON
app.use(express.json());

//creo una ruta get
app.get("/", (_, res) => { // _ significa que no se va a usar el Request (req <-, res)
  res.status(200).json({ status: "online!" });
});

//creo una ruta get
app.get("/api/v1", (_, res) => { // _ significa que no se va a usar el Request (req <-, res)
  res.status(200).json({ message: "Hello World!" });
});

app.use("/api/v1", usersRouter);

app.listen(port, () => console.log(`Server initialized port http://localhost:${port}/api/v1`));
