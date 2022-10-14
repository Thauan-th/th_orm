//Goal: simple "ORM" to study new concepts
const MysqlCore = require('./model/mysql-core')

const main = async () => {
  const db = new MysqlCore('mysql')
  await db.init()
}

main()
