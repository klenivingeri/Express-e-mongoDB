import express from "express";

const app = express();
app.use(express.json())

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

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livros criados com sucesso');
});

export default app;
