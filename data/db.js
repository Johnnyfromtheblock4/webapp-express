// importiamo mysql2
const mysql = require("mysql2");

// creo la connessione
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mementoauderesemper4!",
  database: "db_movies",
  port: "3307",
});

// stabilisco la connessione al db

connection.connect((err) => {
  if (err) {
    console.log(`Errore nella connessine al db: ${err}`);
  } else {
    console.log("Connessione al db avvenuta correttamente");
  }
});
