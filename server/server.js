import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app =  express ()

dotenv.config();

app.use(express.json());
app.use(cors());

const db = new pg.Pool({
    connectionString: process.env.DB_CONN, 
});

app.get("/", (req, res) => {
res.status(200).json({ message: "Welcome to the Psych Board!" });
});

app.get("/posts", async (req, res) => {
  try {
    const posts = (await db.query("SELECT * FROM posts")).rows;
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const result = (await db.query(
      "INSERT INTO posts (title, content, author) VALUES ($1, $2, $3) RETURNING *",
      [title, content, author]
    )).rows;
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const post = (await db.query("SELECT * FROM posts WHERE id = $1", [req.params.id])).rows;
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, ()=> {
    console.log("Server runing on http://localhost:3000")
})