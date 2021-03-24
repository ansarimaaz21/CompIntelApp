const express = require("express"),
  mysql = require("mysql"),
  router = express.Router();

const db = mysql.createConnection({
  host: "wassucompintel.c72jwgez0nlw.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "rdy7OGUGcgZlJ44EZ0WK",
  database: "maaz",
});
// get user lists

router.get("/", function (req, res) {
  res.send("Hey CompIntel!");
});

router.get("/get_products", function (req, res) {
  let sql = `
    SELECT 
        IFNULL(dt, '') date,
        IFNULL(comp,'') comp,
        IFNULL(title,'') title,
        IFNULL(mrp,'') mrp,
        IFNULL(price,'') price,
        IFNULL(availablity,'') availablity,
        IFNULL(url,'#') url
    FROM
        maaz.prod_prices
    WHERE
        dt = CURDATE()
    ORDER BY comp , title;
  `;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    // console.log(data);
    res.json({
      status: 200,
      data,
    });
  });
});

module.exports = router;
