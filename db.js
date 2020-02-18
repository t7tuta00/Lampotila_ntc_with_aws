let mysql = require('mysql');
let pool = null;
try {
  pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'database-1.cgy1u7m6licr.us-east-1.rds.amazonaws.com',
    user            : 'admin',
    password        : '12341234',
<<<<<<< HEAD
    database        : 'innodb'
=======
    database        : 'db'
>>>>>>> c74406edbb10a4914f167881c13367477c8505bf
  });

} catch (error) {
  console.error('Mysql pool create failed');
  console.error(error);
}


const api = {
  query: (query, ...parameters) =>
  {
    let promise = new Promise(function(resolve, reject) {
      pool.query(query, ...parameters, (error, results, fields) => {
        if(error) {
          reject(error)
        };

        resolve(results);
      })
    });

    return promise;
  },
  closeAll: () => {
    pool.end();
  }
};

module.exports = api;
