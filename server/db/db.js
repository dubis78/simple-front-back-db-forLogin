const mysql = require("mysql");
const mysqlConnection = mysql.createConnection({
  host: "brljawlvxoa9qsz54xfh-mysql.services.clever-cloud.com",
  user: "uyxppz06cxbnmsxm",
  password: "zrKPEG3z8dseRtET3XFH",
  database: "brljawlvxoa9qsz54xfh",
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("base de datos conectada!");
  }
});

module.exports = mysqlConnection;
