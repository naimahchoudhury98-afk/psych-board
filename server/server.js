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

app.listen(3000, ()=> {
    console.log("Server runing on http://localhost:3000")
})