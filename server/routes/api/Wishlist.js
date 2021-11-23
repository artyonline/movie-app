const express = require("express");
const router = express.Router();
const { v4: uuid4 } = require("uuid");
const moment = require("moment");

const dbConfig = require("../../dbConfig");
const connection = dbConfig.connection;

// Update wishlist
// @userId - Id of the user
// @movieId - Id of the movie
router.post("/", (req, res) => {
  // Check if movie is in the user's wishlist
  const checkQuery = `SELECT * FROM wishlist WHERE movieId = '${req.body.movieId}' and userId = '${req.body.userId}'`;
  connection.query(checkQuery, (err, result) => {
    if (err) throw err;
    let sql = "";
    let wishlistId = null;
    if (result.length > 0) {
      // Delete From Table
      wishlistId = result[0].wishlistId;
      sql = `DELETE FROM wishlist where movieId = '${req.body.movieId}' and userId = '${req.body.userId}'`;
      res.status(204);
    } else {
      // Insert in to Table
      wishlistId = uuid4();
      sql = `INSERT INTO wishlist (wishlistId, userId, movieId, \`timestamp\`) VALUES ('${wishlistId}', '${
        req.body.userId
      }', '${req.body.movieId}', '${moment().format("x")}');`;
      res.status(200);
    }
    connection.query(sql, (e, execRes) => {
      if (e) throw e;
      res.send({ wishlistId });
    });
  });
});

// Get wishlist by user Id
// @id - Id of the user as a query param
router.get("/", (req, res) => {
  const sql = `SELECT * from wishlist where userId='${req.query.id}'`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.status(204).send();
    } else {
      res.status(200).send({
        data: result,
      });
    }
  });
});

module.exports = router;
