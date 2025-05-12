import express, { Request, Response } from "express";

const app = express();

type Quote = {
  id: number;
  text: string;
  author: string;
};

const quotes: Quote[] = [
  { id: 1, text: "ინჟინერია არის ხელოვნება.", author: "თომას ედისონი" },
  { id: 2, text: "ვინც არ ცდება, ის არაფერს არ აკეთებს.", author: "ალბერტ აინშტაინი" },
  { id: 3, text: "შეუძლებელი – ეს უბრალოდ სიტყვაა.", author: "მუჰამედ ალი" },
];

app.get("/quote", (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`📢 Quote API გაეშვა პორტზე ${PORT}`);
});
