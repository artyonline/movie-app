const express = require("express");
const router = express.Router();
const { v4: uuid4 } = require("uuid");

const dbConfig = require("../../dbConfig");
const connection = dbConfig.connection;
const utils = require("../../util/util");

// Create User (Register/SignUp)
router.post("/register", (req, res) => {

  // check if a user exist with the email
  const checkUserSql = `SELECT id from user where email = '${req.body.email}'`;
  connection.query(checkUserSql, function (err, result) {
    if (err) throw err;
    if (result.length > 0 ) {
      res.status(400);
      res.send( {
        error: "User with given email already exists"
      });
    }
    else {
      const pwdObj = utils.hashPassword(req.body.password);
      // Create User Object
      const newUser = {
        id: uuid4(),
        name: req.body.name,
        email: req.body.email,
        hashPassword: pwdObj.hashedPassword,
        salt: pwdObj.salt,
      };

      const sql = `INSERT INTO user (id, name, email, hashedPassword, salt) VALUES ('${newUser.id}', '${newUser.name}', '${newUser.email}', '${newUser.hashPassword}', '${newUser.salt}')`;
      connection.query(sql, function (err) {
        if (err) throw err;
        console.log("One User Added");
      });
      res.send({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      });
    }
  });


});

// Check password and get User Details to Log in user
router.post("/login", (req, res) => {
  const sql = `SELECT salt from user where email = '${req.body.email}'`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    // If a user is present with the email
    console.log("result: ", result);
    if (result.length > 0) {
      const salt = result[0].salt;
      const pwdObj = utils.hashPassword(req.body.password, salt);
      console.log("pwdObj: ", pwdObj);

      // get user if PW matches
      const getUserSql = `SELECT id, name, email from user where email = '${req.body.email}' and hashedPassword = '${pwdObj.hashedPassword}'`
      connection.query(getUserSql, (err, userResult) => {
        if (err) throw err;
        console.log("userResult: ", userResult);
        if (userResult.length > 0) {
          const user = userResult[0];
          res.status(200);
          res.send(user);
        } else {
          res.status(404);
          res.send({
            "msg": "Username or Password was incorrect."
          });
        }
      })
    } else {
      res.status(404);
      res.send({
        "msg": "Username or Password was incorrect."
      });
    }
  });
});

module.exports = router;
