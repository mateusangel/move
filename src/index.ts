import express, { Request, Response, json } from "express";

const app = express();

app.use(json());

enum strat {
  Rj = "Rio de janeiro",
  Sp = "São Paulo",
}

interface Iadress {
  rua: string;
  numero: number;
  estado: strat;
}
interface Iprodutos {
  id?: number;
  nome: String;
  price: number;
  endress: Iadress;
}
let produtos: Iprodutos[] = [];

app.get("/", (req: Request, res: Response) => {
  let newProdutos: Iprodutos = {
    id: Math.random(),
    nome: "Pc",
    price: 100,
    endress: {
      numero: 123,
      rua: "presidente",
      estado: strat.Rj,
    },
  };

  produtos.push(newProdutos);
  res.json(produtos);
});

let Port: number;
Port = 3000;

app.listen(Port, () => {
  console.log("Servidor Rodando...");
});
