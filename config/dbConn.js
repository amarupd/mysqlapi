module.exports={
  host     : 'localhost',
  user     : 'root',
  password : 'amar',
  database : 'node_mysql',
  dialect : 'mysql2',

  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  }
}