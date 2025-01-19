import express from "express";

const app = express();

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "Pequeno Principe",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso no NODEJS");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;
